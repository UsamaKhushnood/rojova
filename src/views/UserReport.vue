<template>
  <div>
    <section id="page-content">
      <!--/ End header content -->

      <!-- Start body content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <!-- Start mail page -->
        <div class="row">
          <div class="col-sm-3">
            <a
              href="mail-compose.html"
              class="btn btn-danger btn-block btn-compose-email"
              >Compose Email</a
            >
            <ul class="nav nav-pills nav-stacked nav-email shadow mb-20">
              <li class="active">
                <a href="Admin-Settings-Reports.html#">
                  <i class="fa fa-inbox"></i> New Report
                  <span class="label pull-right">7</span>
                </a>
              </li>
              <li>
                <a href="Admin-Settings-Reports.html#"
                  ><i class="fa fa-envelope-o"></i> Solved Report</a
                >
              </li>
              <li>
                <a href="Admin-Settings-Reports.html#"
                  ><i class="fa fa-certificate"></i> A waiting</a
                >
              </li>
            </ul>
            <!-- /.nav -->
          </div>

          <div class="col-sm-9">
            <div class="panel rounded shadow panel-teal">
              <div class="panel-heading">
                <div class="pull-left">
                  <h3 class="panel-title">Inbox (7)</h3>
                </div>
                <div class="pull-right">
                  <form
                    action="mail-inbox.html#"
                    class="form-horizontal mr-5 mt-3"
                  >
                    <div class="form-group no-margin no-padding has-feedback">
                      <input
                        type="text"
                        class="form-control no-border"
                        placeholder="Search mail"
                      />
                      <button
                        type="submit"
                        class="btn btn-theme fa fa-search form-control-feedback"
                      ></button>
                    </div>
                  </form>
                </div>
                <div class="clearfix"></div>
              </div>
              <!-- /.panel-heading -->
              <div class="panel-sub-heading inner-all">
                <div class="pull-left">
                  <ul class="list-inline no-margin">
                    <li>
                      <div class="ckbox ckbox-theme">
                        <input
                          id="checkbox-group"
                          type="checkbox"
                          class="mail-group-checkbox"
                        />
                        <label for="checkbox-group"></label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="clearfix"></div>
              </div>
              <!-- /.panel-sub-heading -->
              <div class="panel-body no-padding">
                <div class="table-responsive">
                  <table class="table table-hover table-email">
                    <tbody>
                      <tr class="unread selected">
                        <td>
                          <div class="ckbox ckbox-theme">
                            <input
                              id="checkbox1"
                              type="checkbox"
                              checked="checked"
                              class="mail-checkbox"
                            />
                            <label for="checkbox1"></label>
                          </div>
                        </td>
                        <td></td>
                        <td>
                          <div class="media">
                            <a href="mail-inbox.html#" class="pull-left">
                              <img
                                alt="..."
                                src="@/assets/img/avatar/35/2.png"
                                class="media-object"
                              />
                            </a>
                            <div class="media-body">
                              <a
                                class="text-primary"
                                href="#"
                                data-toggle="modal"
                                data-target="#user_repo"
                                >John sss</a
                              >
                              <p class="email-summary">
                                <strong>Commits pushed</strong> Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit...
                                <span class="label label-success">New</span>
                              </p>
                              <span class="media-meta">Today at 6:16am</span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr class="unread">
                        <td>
                          <div class="ckbox ckbox-theme">
                            <input
                              id="checkbox10"
                              type="checkbox"
                              class="mail-checkbox"
                            />
                            <label for="checkbox10"></label>
                          </div>
                        </td>
                        <td></td>
                        <td>
                          <div class="media">
                            <a href="mail-inbox.html#" class="pull-left">
                              <img
                                alt="..."
                                src="@/assets/img/avatar/35/11.png"
                                class="media-object"
                              />
                            </a>
                            <div class="media-body">
                              <h4 class="text-primary">Sarah Tingting</h4>
                              <p class="email-summary">
                                <strong>Java Developer + 2 new jobs</strong>
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur...
                              </p>
                              <span class="media-meta">Jun 05</span>
                              <span class="media-attach"
                                ><i class="fa fa-warning"></i
                              ></span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.table-responsive -->
              </div>
              <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
          </div>
        </div>
        <!-- /.row -->
        <!--/ End mail page -->
      </div>
      <!-- /.body-content -->
      <!--/ End body content -->
      <!--/ End body content -->
      <!--modal-->
      <div class="modal modal-success" role="dialog" id="user_repo">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <h4 class="modal-title">Details</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xs-12" style="height: 200px">
                  <img
                    class="img-thumbnail"
                    style="width: 100%; height: 100%"
                    src="@/assets/img//BILLY-ARGEL-GINGA.jpg"
                  />
                </div>
                <div class="col-xs-12">
                  <p style="font-size: 15px" class="">
                    the problem details here the problem details here the
                    problem details here
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success">Solved</button>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#replay"
              >
                Replay
              </button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->

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