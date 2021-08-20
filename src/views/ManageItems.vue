<template>
  <div>
    <section id="page-content">
      <b-card no-body>
        <b-card-text>
        
      <div class="p-2 mt-4">
        <div>
          <div class="d-flex justify-content-between align-items-center w-100 pe-3">
            <input type="search" class="form-control w-25 mt-3 mb-3" placeholder="Search a product">
            <div class="buttonsClass d-flex justify-content-center w-100">
              <button class="btn btn-success me-2">CSV</button>
              <button class="btn btn-success me-2">Excel</button>
              <button class="btn btn-success me-2">PDF</button>
              <button class="btn btn-success">Print</button>
            </div>
          </div>
          
          <b-table :items="manageItems" :fields="manageItemsfields" :current-page="currentPage">

            <template #cell(id)="data">
              {{ data.index + 1 }}
            </template>

            <!-- A custom formatted column -->
            <template #cell(product)="data">
              {{ data.item.product }}
            </template>

            <!-- A virtual composite column -->
            <template #cell(reference)="data">
              {{ data.item.reference }}
            </template>

            <template #cell(category)="data">
              {{ data.item.category }}
            </template>

            <template #cell(price)="data">
              {{ data.item.price }}
            </template>

            <template #cell(dateAdded)="data">
              {{ data.item.dateAdded }}
            </template>

            <template #cell(stock)="data">
              {{ data.item.stock }}
            </template>

            <template #cell(sales)>
              <div class="panel-body">
                <span class="bar" style="display: none"
                  >5,0,0,6,5,9,7,3,5,2</span
                ><svg class="peity" height="16" width="32">
                  <rect
                    fill="#4D89F9"
                    x="0.32"
                    y="7.111111111111111"
                    width="2.56"
                    height="8.88888888888889"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="3.5200000000000005"
                    y="15"
                    width="2.5599999999999996"
                    height="1"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="6.720000000000001"
                    y="15"
                    width="2.5599999999999987"
                    height="1"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="9.92"
                    y="5.333333333333334"
                    width="2.5600000000000005"
                    height="10.666666666666666"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="13.12"
                    y="7.111111111111111"
                    width="2.5600000000000023"
                    height="8.88888888888889"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="16.32"
                    y="0"
                    width="2.5600000000000023"
                    height="16"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="19.52"
                    y="3.5555555555555554"
                    width="2.5600000000000023"
                    height="12.444444444444445"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="22.72"
                    y="10.666666666666668"
                    width="2.5600000000000023"
                    height="5.333333333333332"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="25.919999999999998"
                    y="7.111111111111111"
                    width="2.5600000000000023"
                    height="8.88888888888889"
                  ></rect>
                  <rect
                    fill="#4D89F9"
                    x="29.119999999999997"
                    y="12.444444444444445"
                    width="2.5600000000000023"
                    height="3.5555555555555554"
                  ></rect>
                </svg>
              </div>
            </template>

            <template #cell(status)="data">
              <b-badge
                variant="success"
                style="background-color: #28a745"
                v-show="data.item.stock >= 91"
                >{{ data.item.status }}</b-badge
              >
              <b-badge
                variant="success"
                style="background-color: #e9573f"
                v-show="data.item.stock <= 90"
                >{{ data.item.status }}</b-badge
              >
            </template>

            <template #cell(actions)>
              <div class="allLinks">
                <a class="editLink">
                  <i
                    class="fa fa-pencil"
                    style="font-size: 16px; color: #e9573f"
                  ></i>
                </a>
                <a class="deleteLink">
                  <i
                    class="fa fa-trash-o"
                    style="font-size: 16px; color: #367fa9"
                  ></i>
                </a>
              </div>
            </template>

            <!-- Optional default data cell scoped slot -->

            <!-- <template #cell(option)>
                      <div class="allLinks">
                        <a class="viewLink">
                          <i
                            class="fa fa-eye"
                            style="font-size: 16px; color: black"
                          ></i>
                          
                        </a>
                        <a class="editLink">
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          
                        </a>
                        <a class="deleteLink">
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          
                        </a>
                      </div>
                    </template> -->
          </b-table>
        </div>
        
      </div>
      <div class="overflow-auto d-flex justify-content-center mt-4">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      
    ></b-pagination>


        </div>
          
        </b-card-text>
      </b-card>
    </section>
  </div>
</template>

<style scoped>
.iconStyle {
  margin-right: 10px;
}
.allLinks {
  display: flex;
  align-items: center;
  width: 100%;
}

a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}

 
</style>

<script>
export default {
  data() {
    return {
        rows: 20,
        perPage: 5,
        currentPage: 1,
      // Note 'isActive' is left out and will not appear in the rendered table
      manageItemsfields: [
        {
          key: "id",
          label: "ID",
          //sortable: true
        },
        {
          key: "product",
          label: "Product",
          sortable: true,
        },
        {
          key: "reference",
          label: "Reference",
          sortable: true,
        },
        {
          key: "category",
          label: "Category",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          //variant: 'danger'
        },
        {
          key: "price",
          label: "Price",
          sortable: true,
        },
        {
          key: "dateAdded",
          label: "Date Added",
          sortable: true,
        },
        {
          key: "stock",
          label: "Stock",
        },
        {
          key: "sales",
          label: "Sales",
        },
        {
          key: "status",
          label: "Status",
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      manageItems: [
        {
          isActive: true,
          product: "Product 1",
          reference: "Reference 1",
          category: "categ 1",
          price: "$50.00",
          dateAdded: "12-12-2020",
          stock: "100",
          status: "Online",
        },
        {
          isActive: true,
          product: "Product 2",
          reference: "Reference 2",
          category: "categ 2",
          price: "$25.00",
          dateAdded: "12-12-2020",
          stock: "90",
          status: "Deleted",
        },
        {
          isActive: true,
          product: "Product 3",
          reference: "Reference 3",
          category: "categ 3",
          price: "$25.00",
          dateAdded: "12-12-2020",
          stock: "90",
          status: "Deleted",
        },
        {
          isActive: true,
          product: "Product 4",
          reference: "Reference 4",
          category: "categ 4",
          price: "$75.00",
          dateAdded: "15-12-2020",
          stock: "100",
          status: "Online",
        },
      ],
    };
  },
};
</script>