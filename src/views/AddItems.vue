<template>
  <div>
    <section id="page-content">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="col-sm-12" style="min-height: 90vh">
            <!-- Start double tabs -->
            <div id="progress-wizard">
              <div class="panel panel-tab rounded shadow">
                <!-- Start tabs heading -->
                <div class="panel-heading no-padding">
                  <ul class="nav nav-tabs nav-pills">
                    <li class="active">
                      <a href="form-wizard.html#tab3-1" data-toggle="tab">
                        <i class="fa fa-user"></i>
                        <div>
                          <span class="text-strong">Select Category</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-2" data-toggle="tab">
                        <i class="fa fa-file-text"></i>
                        <div>
                          <span class="text-strong">Item Info</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-3" data-toggle="tab">
                        <i class="fa fa-credit-card"></i>
                        <div>
                          <span class="text-strong">Item Images</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-4" data-toggle="tab">
                        <i class="fa fa-check-circle"></i>
                        <div>
                          <span class="text-strong">Item Price</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-5" data-toggle="tab">
                        <i class="fa fa-check-circle"></i>
                        <div>
                          <span class="text-strong">SEO</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-6" data-toggle="tab">
                        <i class="fa fa-check-circle"></i>
                        <div>
                          <span class="text-strong">Inventory</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="form-wizard.html#tab3-7" data-toggle="tab">
                        <i class="fa fa-check-circle"></i>
                        <div>
                          <span class="text-strong">Shipping</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.panel-heading -->
                <!--/ End tabs heading -->

                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 14.2857%"
                      ></div>
                    </div>
                  </div>
                </div>
                <!-- /.panel-sub-heading -->

                <!-- Start tabs content -->
                <div class="panel-body">
                  <form
                    action="form-wizard.html#"
                    class="tab-content form-horizontal"
                  >
                    <div class="tab-pane fade in active inner-all" id="tab3-1">
                      <div class="col-md-4"></div>
                      <div class="col-md-4" style="display: none">
                        <button
                          type="button"
                          class="btn btn-primary col-xs-12 btn-lg"
                          data-toggle="modal"
                          data-target="#addMedia"
                        >
                          <span class="append-icon"
                            ><i class="fa fa-plus-square"></i></span
                          >&nbsp;Add Vote
                        </button>
                      </div>

                      <div class="col-md-4"></div>
                      <div class="col-md-12" style="padding-top: 30px">
                        <table class="table table-striped table-primary">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Title</th>
                              <th>Category</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center" style="width: 7%">
                                <b>1024</b>
                              </td>
                              <td>1345</td>
                              <td>categ</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#viewItem"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-eye"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#EditMedia"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#removeLang"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center" style="width: 7%">
                                <b>1074</b>
                              </td>

                              <td>Hopkins</td>

                              <td>subcategory</td>
                              <td class="menu-action">
                                <div class="pdng5">
                                  <a
                                    data-toggle="modal"
                                    data-target="#viewItem"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-eye"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#EditMedia"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-pencil"
                                      data-original-title="Edit"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                  <a
                                    data-toggle="modal"
                                    data-target="#removeLang"
                                    class="btn btn-xs btn-default"
                                    ><i
                                      class="fa fa-trash-o"
                                      data-original-title="Remove"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    ></i
                                  ></a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- col-md-12 end -->
                    </div>
                    <div class="tab-pane fade inner-all" id="tab3-2">sss</div>
                    <div class="tab-pane fade inner-all" id="tab3-3">test</div>
                    <div class="tab-pane fade inner-all" id="tab3-4">test</div>
                    <div class="tab-pane fade inner-all" id="tab3-5">test5</div>
                    <div class="tab-pane fade inner-all" id="tab3-6">test6</div>
                    <div class="tab-pane fade inner-all" id="tab3-7">test7</div>
                  </form>
                </div>
                <!-- /.panel-body -->
                <!--/ End tabs content -->

                <!-- Start pager -->
                <div class="panel-footer">
                  <ul class="pager wizard no-margin">
                    <li class="previous disabled">
                      <a href="javascript:void(0);">Previous</a>
                    </li>
                    <li class="next"><a href="javascript:void(0);">Next</a></li>
                  </ul>
                </div>
                <!-- /.panel-footer -->
                <!--/ End pager -->
              </div>
            </div>
            <!-- /#progress-wizard -->
            <!--/ End progress bar wizard-->
          </div>
        </div>
      </div>
      <!-- /.body-content -->
      <!--/ End body content -->
      <!-- ADD LANG -->
      <!--modal-->
      <div class="modal modal-success" role="dialog" id="addMedia">
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
              <h4 class="modal-title">Add Vote</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Select Category</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select class="langSelect col-xs-12">
                        <option selected="">Choose a category</option>
                        <option>category1</option>
                        <option>category2</option>
                        <option>category3</option>
                        <option>category4</option>
                        <option>category5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="name"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="title"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-4 control-label">Banner upload:</label>
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
                          ><span class="fileinput-new">Select Banner</span
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
                class="btn btn-success"
                data-dismiss="modal"
              >
                Save and add new
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and close
              </button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->

      <!--modal-->
      <div class="modal modal-success" role="dialog" id="EditMedia">
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
              <h4 class="modal-title">Edit Vote</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Select Category</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select class="langSelect col-xs-12">
                        <option selected="">Choose a category</option>
                        <option>category1</option>
                        <option>category2</option>
                        <option>category3</option>
                        <option>category4</option>
                        <option>category5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="name"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="title"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-4 control-label">Banner upload:</label>
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
                          ><span class="fileinput-new">Select Banner</span
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
                class="btn btn-success"
                data-dismiss="modal"
              >
                Save and add new
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and close
              </button>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div
        class="modal fade modal-primary"
        id="addLang"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
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
              <h4 class="modal-title">Add Category</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Categorey Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="categ"
                      type="categ"
                      class="form-control col-xs-12"
                      name="categ"
                      placeholder="Categorey Name"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and add new
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and close
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit category -->
      <div
        class="modal fade modal-primary"
        id="editcat"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
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
              <h4 class="modal-title">Edit category</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Category</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="name"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Subcategory"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and add new
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- EDIT LANG -->
      <div
        class="modal right fade modal-success"
        id="viewItem"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
        style="z-index: 1049"
      >
        <div class="modal-dialog modal-md" role="document">
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
              <h4 class="modal-title">View Items</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="input-group col-xs-12" style="font-size: 15px">
                    <label class="col-sm-4 control-label">Title</label>
                    <div class="col-sm-7 controls">
                      <p>title</p>
                    </div>
                  </div>
                  <div class="input-group col-xs-12" style="font-size: 15px">
                    <label class="col-sm-4 control-label">Url</label>
                    <div class="col-sm-7 controls">
                      <p>www.example.com</p>
                    </div>
                  </div>
                  <div class="input-group col-xs-12" style="font-size: 15px">
                    <label class="col-sm-4 control-label">Banner</label>
                    <div class="col-sm-7 controls">
                      <img
                        src="img/BILLY-ARGEL-GINGA.jpg"
                        width="100%"
                        height="200px"
                      />
                    </div>
                  </div>
                </div>
                <!-- col-md-12 end -->
              </div>
              <!-- row end -->
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- EDIT TRANSLATION -->
      <div
        class="modal right fade modal-success"
        id="editTranslation"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
        style="z-index: 1050"
      >
        <div class="modal-dialog modal-lg" role="document">
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
              <h4 class="modal-title">Edit Arabic Translation</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="form-group clearfix">
                  <h4 class="col-sm-4 control-label text-right">ENGLISH</h4>
                  <h4 class="col-sm-7">ARABIC</h4>
                </div>
                <div class="form-group clearfix">
                  <label class="col-sm-4 control-label text-right"
                    >Account Details</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        value="Arabic text"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group clearfix">
                  <label class="col-sm-4 control-label text-right"
                    >Activities</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        value="Arabic text"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group clearfix">
                  <label class="col-sm-4 control-label text-right"
                    >Activity</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        value="Arabic text"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>

      <!-- REMOVE LANG -->
      <div
        class="modal fade modal-danger"
        id="removeLang"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header vd_bg-red">
              <button
                type="button"
                class="close vd_white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title vd_white">REMOVE</h4>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to remove this</p>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                CONFIRM
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