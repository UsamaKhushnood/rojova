<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="mt-0">
          <b-tabs pills card vertical nav-wrapper-class="w-25" content-class="policyAndTermsTabsContent" class="policyAndTermsTabs">
            <b-tab active>
              <template #title>
                <i class="fa fa-file-text-o iconStyle"></i>
                <strong>Privacy Policy</strong>
              </template>
              <b-card-text>
                <vue-editor></vue-editor>
                <div class="d-flex align-items-center mt-2">
                  <button class="btn btn-success">Submit</button>
                </div>
                
              </b-card-text>
            </b-tab>

            <b-tab>
              <template #title>
                <i class="fa fa-file-text-o iconStyle"></i>
                <strong>Desclaimer</strong>
              </template>
              <b-card-text>
                <vue-editor></vue-editor>
                <div class="d-flex align-items-center mt-2">
                  <button class="btn btn-success">Submit</button>
                </div>
                
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-rss iconStyle"></i>
                <strong>News</strong>
              </template>
              <b-card-text>
                <p>working 3</p>
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

