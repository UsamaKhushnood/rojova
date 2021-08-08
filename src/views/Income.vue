<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-money iconStyle"></i>
                <strong>Daily Income</strong>
              </template>
              <b-card-text>

                <div class="container mt-3 mb-2 ps-0">
                  <button class="btn btn-success">Print PDF</button>
                </div>
                
                <div>
                  <b-table
                    small
                    :fields="dailyIncomeFields"
                    :items="dailyIncomeItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(date)="data">
                      {{ data.item.date }}
                    </template>

                    <template #cell(onlineShop)="data">
                      {{ data.item.onlineShop }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(bazar)="data">
                      {{ data.item.bazar }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(premium)="data">
                      {{ data.item.premium }}
                    </template>

                    <template #cell(vip)="data">
                      {{ data.item.vip }}
                    </template>
                    
                    <template #cell(musik)="data">
                      {{ data.item.musik }}
                    </template>
                    
                    <template #cell(events)="data">
                      {{ data.item.events }}
                    </template>

                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>
                    
                    <template #cell(paymentFee)="data">
                      {{ data.item.paymentFee }}
                    </template>
                    
                    <template #cell(total)="data">
                      {{ data.item.total }}
                    </template>
                    
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-money iconStyle"></i>
                <strong>Monthly Income</strong>
              </template>
              <b-card-text>

                <div class="container mt-3 mb-2 ps-0">
                  <button class="btn btn-success">Print PDF</button>
                </div>
                
                <div>
                  <b-table
                    small
                    :fields="monthlyIncomeFields"
                    :items="monthlyIncomeItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(date)="data">
                      {{ data.item.date }}
                    </template>

                    <template #cell(onlineShop)="data">
                      {{ data.item.onlineShop }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(bazar)="data">
                      {{ data.item.bazar }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(premium)="data">
                      {{ data.item.premium }}
                    </template>

                    <template #cell(vip)="data">
                      {{ data.item.vip }}
                    </template>
                    
                    <template #cell(musik)="data">
                      {{ data.item.musik }}
                    </template>
                    
                    <template #cell(events)="data">
                      {{ data.item.events }}
                    </template>

                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>
                    
                    <template #cell(paymentFee)="data">
                      {{ data.item.paymentFee }}
                    </template>
                    
                    <template #cell(total)="data">
                      {{ data.item.total }}
                    </template>
                    
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-money iconStyle"></i>
                <strong>Yearly Income</strong>
              </template>
              <b-card-text>

                <div class="container mt-3 mb-2 ps-0">
                  <button class="btn btn-success">Print PDF</button>
                </div>
                
                <div>
                  <b-table
                    small
                    :fields="yearlyIncomeFields"
                    :items="yearlyIncomeItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(date)="data">
                      {{ data.item.date }}
                    </template>

                    <template #cell(onlineShop)="data">
                      {{ data.item.onlineShop }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(bazar)="data">
                      {{ data.item.bazar }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(premium)="data">
                      {{ data.item.premium }}
                    </template>

                    <template #cell(vip)="data">
                      {{ data.item.vip }}
                    </template>
                    
                    <template #cell(musik)="data">
                      {{ data.item.musik }}
                    </template>
                    
                    <template #cell(events)="data">
                      {{ data.item.events }}
                    </template>

                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>
                    
                    <template #cell(paymentFee)="data">
                      {{ data.item.paymentFee }}
                    </template>
                    
                    <template #cell(total)="data">
                      {{ data.item.total }}
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
.imageStyles {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.badge {
  font-size: 13px;
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
}

a.deleteLink {
  border: 2px solid #367fa9;
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
      dailyIncomeFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "date", label: "Date" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "onlineShop", label: "Online Shop" },
        // A regular column
        { key: "bazar", label: "Bazar" },
        // A virtual column made up from two fields
        { key: "premium", label: "Premium" },
        //
        { key: "vip", label: "Vip" },

        { key: "musik", label: "Musik" },

        { key: "events", label: "Events" },
        { key: "tickets", label: "Tickets" },
        { key: "paymentFee", label: "Payment Fee" },
        { key: "total", label: "Total" },
      ],
      dailyIncomeItems: [
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
      ],
      monthlyIncomeFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "date", label: "Month" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "onlineShop", label: "Online Shop" },
        // A regular column
        { key: "bazar", label: "Bazar" },
        // A virtual column made up from two fields
        { key: "premium", label: "Premium" },
        //
        { key: "vip", label: "Vip" },

        { key: "musik", label: "Musik" },

        { key: "events", label: "Events" },
        { key: "tickets", label: "Tickets" },
        { key: "paymentFee", label: "Payment Fee" },
        { key: "total", label: "Total" },
      ],
      monthlyIncomeItems: [
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
      ],
      yearlyIncomeFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "date", label: "Year" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "onlineShop", label: "Online Shop" },
        // A regular column
        { key: "bazar", label: "Bazar" },
        // A virtual column made up from two fields
        { key: "premium", label: "Premium" },
        //
        { key: "vip", label: "Vip" },

        { key: "musik", label: "Musik" },

        { key: "events", label: "Events" },
        { key: "tickets", label: "Tickets" },
        { key: "paymentFee", label: "Payment Fee" },
        { key: "total", label: "Total" },
      ],
      yearlyIncomeItems: [
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
        {
          date: "Date",
          onlineShop: "Online Shop",
          bazar: "Bazar",
          premium: "Premium",
          vip: "VIP",
          musik: "Musik",
          events: "Events",
          tickets: "Tickets",
          paymentFee: "Payment Fee",
          total: "Total"
        },
      ],
      // new style 

    };
  },
};
</script>