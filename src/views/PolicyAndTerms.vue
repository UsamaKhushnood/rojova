<template>
  <div>
    <section id="page-content">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="col-md-12 view-height">
            <div id="basic-wizard-vertical">
              <div
                class="
                  panel panel-tab panel-tab-double panel-tab-vertical
                  row
                  no-margin
                  rounded
                  shadow
                "
              >
                <!-- Start tabs heading -->
                <div
                  class="panel-heading no-padding col-md-3"
                  align="center"
                  style=""
                >
                  <div
                    class="col-md-12"
                    style="padding-top: 15px; margin-bottom: 15px"
                  >
                    <button
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addTab"
                      style="font-size: 18px; font-weight: bold"
                    >
                      +Add New Tab
                    </button>
                    <br />
                  </div>

                  <div class="form-group" style="padding: 15px">
                    <select class="form-control">
                      <option>Sort by Name</option>
                      <option value="1">A to Z</option>
                      <option value="2">Z to A</option>
                    </select>
                  </div>

                  <ul class="nav nav-tabs nav-pills">
                    <li class="active">
                      <a href="form-wizard.html#tab2-1" data-toggle="tab">
                        <i class="fa fa-file-text-o"></i>
                        <div>
                          <span class="text-strong">Privacy Policy</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-2" data-toggle="tab">
                        <i class="fa fa-file-text"></i>
                        <div>
                          <span class="text-strong">Disclaimer </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-3" data-toggle="tab">
                        <i class="fa fa-rss"></i>
                        <div>
                          <span class="text-strong">News</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.panel-heading -->
                <!--/ End tabs heading -->

                <!-- Start tabs content -->
                ><!-- /.panel-body -->
                <!--/ End tabs content -->
              </div>
              <!-- /.panel -->
            </div>
          </div>
        </div>
        <!-- modal  -->
      </div>
      <!-- /.body-content -->
      <!--/ End body content -->

      <div
        class="modal fade"
        id="addTab"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add subcategory"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header vd_bg-green">
              <button
                type="button"
                class="close vd_white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title vd_white">ADD NEW TAB</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="mainCategoryAdd"
                    placeholder="Add Tab Name Here"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="mainCategoryAdd"
                    placeholder="Add Icon code"
                  />
                </div>
                <button type="submit" class="btn btn-primary">ADD</button>
              </form>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Start footer content -->
      <footer class="footer-content">
        2014 - <span id="copyright-year">2021</span>© SmartSystems . Created by
        <a href="" target="_blank">SmartDesign</a>
        <span class="pull-right">0.01 GB(0%) of 15 GB used</span>
      </footer>
      <!-- /.footer-content -->
      <!--/ End footer content -->
    </section>
  </div>
</template>