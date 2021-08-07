<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-line-chart iconStyle"></i>
                <strong>New Sales</strong>
              </template>
              <b-card-text>
                
                <div>
                  <b-table
                    small
                    :fields="newSalesFields"
                    :items="newSalesItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(username)="data">
                      {{ data.item.username }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(eventName)="data">
                      {{ data.item.eventName }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(persons)="data">
                      {{ data.item.persons }}
                    </template>
                    <template #cell(totalPrice)="data">
                      {{ data.item.totalPrice }}
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="viewLink"
                          v-b-modal="'view-ticket-modal' + data.index"
                        >
                          <i
                            class="fa fa-eye"
                            style="font-size: 16px; color: black"
                          ></i>
                          
                        </a>
                       <ViewTicketModal :index="data.index"></ViewTicketModal>
                      </div>
                      
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            
          </b-tabs>
        </b-card>
      </div>
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
a.viewLink {
  border: 2px solid black;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}


</style>

    
<script>
import ViewTicketModal from "@/components/modals/tickets-modals/ViewTicketModal"
export default {
  components: { ViewTicketModal },
  data() { 
    return {
      newSalesFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "username", label: "Username" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "eventName", label: "Event Name" },
        // A regular column
        { key: "persons", label: "Persons" },
        // A virtual column made up from two fields
        { key: "totalPrice", label: "Total Price" },
        //
        { key: "option", label: "Option" },
      ],
      newSalesItems: [
        {
          username: "Sameer",
          eventName: "categ",
          persons: "categ",
          totalPrice: "categ"
        },
        {
          username: "Sameer",
          eventName: "categ",
          persons: "categ",
          totalPrice: "categ"
        },
        {
          username: "Sameer",
          eventName: "categ",
          persons: "categ",
          totalPrice: "categ"
        },
      ],
      
    };
  },
  
};
</script>