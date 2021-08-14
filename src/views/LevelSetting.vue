<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="mt-0">
          <b-tabs pills card vertical nav-wrapper-class="w-25" content-class="levelSettingTabsContent" class="levelSettingTabs">
            <b-tab active>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 1</strong>
              </template>
              <b-card-text>
                <div class="d-flex align-items">
                  <button class="btn btn-success me-3">Reply Comments</button>
                  <button class="btn btn-success">Reply Messages</button>
                </div>
              </b-card-text>
            </b-tab>

            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 2</strong>
              </template>
              <b-card-text>
                <p>working 2</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 3</strong>
              </template>
              <b-card-text>
                <p>working 3</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 4</strong>
              </template>
              <b-card-text>
                <p>working 4</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 5</strong>
              </template>
              <b-card-text>
                <p>working 5</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 6</strong>
              </template>
              <b-card-text>
                <p>working 6</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 7</strong>
              </template>
              <b-card-text>
                <p>working 7</p>
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
  font-size: 25px;
}

</style>

