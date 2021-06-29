<template>
  <div>
    <section id="page-content" style="min-height: 90vh">
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
                <div class="panel-heading no-padding col-md-3">
                  <ul class="nav nav-tabs nav-pills">
                    <li class="active">
                      <a href="form-wizard.html#tab2-1" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 1</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-2" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 2</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-3" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 3</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-4" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 4</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="form-wizard.html#tab2-5" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 5</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-6" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 6</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab2-7" data-toggle="tab">
                        <i class="fa fa-bars"></i>
                        <div>
                          <span class="text-strong">Level 7</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.panel-heading -->
                <!--/ End tabs heading -->

                <!-- Start tabs content -->
                <div class="panel-body col-md-9">
                  <form
                    action="form-wizard.html#"
                    class="tab-content form-horizontal"
                  >
                    <div class="tab-pane fade in active inner-all" id="tab2-1">
                      <div class="ml-10">
                        <button
                          class="btn btn-success btn-sm btn-push mb-10"
                          data-animate="slideOutUp"
                        >
                          Replay Comments
                        </button>
                        <button
                          class="btn btn-success btn-sm btn-push mb-10"
                          data-animate="slideOutDown"
                        >
                          Replay Messages
                        </button>
                      </div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-2">
                      <div class="ml-10"></div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-3">
                      <div class="ml-10"></div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-4">
                      <div class="ml-10"></div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-5">
                      <div class="ml-10"></div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-6">
                      <div class="ml-10"></div>
                    </div>
                    <div class="tab-pane fade inner-all" id="tab2-7">
                      <div class="ml-10"></div>
                    </div>
                  </form>
                  <!-- Start pager -->

                  <!--/ End pager -->
                </div>
                <!-- /.panel-body -->
                <!--/ End tabs content -->
              </div>
              <!-- /.panel -->
            </div>
          </div>
        </div>
      </div>
      <!-- /.body-content -->
      <!--/ End body content -->

      <!--modal-->
      <div class="modal modal-success" role="dialog" id="add_new_smile">
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
              <h4 class="modal-title">Add New Admin</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Name</span>
                  <input
                    id="Name"
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="Name"
                  />
                </div>

                <br />
                <div class="input-group">
                  <span class="input-group-addon">Last Name</span>
                  <input
                    id="LName"
                    type="text"
                    class="form-control"
                    name="LName"
                    placeholder="Last Name"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">E-mail</span>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Phone No.</span>
                  <input
                    id="PNumber"
                    type="text"
                    class="form-control"
                    name="PNumber"
                    placeholder="Phone No."
                  />
                </div>
                <br />

                <div class="form-group">
                  <label class="col-md-4 control-label">Image upload:</label>
                  <div class="col-md-8">
                    <div
                      class="fileinput fileinput-new"
                      data-provides="fileinput"
                    >
                      <div
                        class="fileinput-preview thumbnail"
                        data-trigger="fileinput"
                        style="width: 200px; height: 150px; line-height: 150px"
                      ></div>
                      <div>
                        <span class="btn btn-info btn-file"
                          ><span class="fileinput-new">Select image</span
                          ><span class="fileinput-exists">Change</span
                          ><input type="hidden" value="" name="..." /><input
                            type="file"
                            name=""
                        /></span>
                        <a
                          href="form-element.html#"
                          class="btn btn-danger fileinput-exists"
                          data-dismiss="fileinput"
                          >Remove</a
                        >
                      </div>
                    </div>
                  </div>
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
              <button type="button" class="btn btn-success">Add</button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <!--modal-->
      <!--modal-->
      <div class="modal modal-danger" role="dialog" id="modal-remove">
        <div class="modal-dialog modal-sm">
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
              <h4 class="modal-title">Delete</h4>
            </div>
            <div class="modal-body">
              <p>Are you sure to delete this</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                No
              </button>
              <button type="button" class="btn btn-danger">Yes</button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div class="modal modal-success" role="dialog" id="edit_new_smile">
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
              <h4 class="modal-title">Edit New Admin</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Name</span>
                  <input
                    id="Name"
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="Name"
                  />
                </div>
                <br />

                <div class="input-group">
                  <span class="input-group-addon">Last Name</span>
                  <input
                    id="LName"
                    type="text"
                    class="form-control"
                    name="LName"
                    placeholder="Last Name"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">E-mail</span>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Phone No.</span>
                  <input
                    id="PNumber"
                    type="text"
                    class="form-control"
                    name="PNumber"
                    placeholder="Phone No."
                  />
                </div>
                <br />

                <div class="form-group">
                  <label class="col-md-4 control-label">Image upload:</label>
                  <div class="col-md-8">
                    <div
                      class="fileinput fileinput-new"
                      data-provides="fileinput"
                    >
                      <div
                        class="fileinput-preview thumbnail"
                        data-trigger="fileinput"
                        style="width: 200px; height: 150px; line-height: 150px"
                      ></div>
                      <div>
                        <span class="btn btn-info btn-file"
                          ><span class="fileinput-new">Select image</span
                          ><span class="fileinput-exists">Change</span
                          ><input type="hidden" value="" name="..." /><input
                            type="file"
                            name=""
                        /></span>
                        <a
                          href="form-element.html#"
                          class="btn btn-danger fileinput-exists"
                          data-dismiss="fileinput"
                          >Remove</a
                        >
                      </div>
                    </div>
                  </div>
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
              <button type="button" class="btn btn-success">Edit</button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!--modal-->

      <!-- /.modal -->

      <!-- /.modal -->
      <!--modal-->

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