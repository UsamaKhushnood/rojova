<template>
  <div>
    <section id="page-content">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="vd_content-section clearfix" style="min-height: 90vh">
            <!-- Start double tabs -->
            <div class="panel panel-tab panel-tab-double rounded shadow">
              <!-- Start tabs heading -->
              <div class="panel-heading no-padding">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a
                      href="component-tabsaccordion.html#tab2-1"
                      data-toggle="tab"
                    >
                      <i class="fa fa-user"></i>
                      <div>
                        <h6 class="text-strong">Add Music</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="component-tabsaccordion.html#tab2-2"
                      data-toggle="tab"
                    >
                      <i class="fa fa-plus-circle"></i>
                      <div>
                        <h6 class="text-strong">Add Category</h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /.panel-heading -->
              <!--/ End tabs heading -->

              <!-- Start tabs content -->
              <div class="panel-body">
                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab2-1">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <button
                        type="button"
                        class="btn btn-primary col-xs-12 btn-lg"
                        data-toggle="modal"
                        data-target="#addMedia"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add Music
                      </button>
                    </div>

                    <div class="col-md-4"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>Music Name</th>
                            <th>Category</th>
                            <th>Track</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <b>1024</b>
                            </td>
                            <td>1345</td>
                            <td>
                              <audio controls="">
                                <source
                                  src="imgSelect/horse.ogg"
                                  type="audio/ogg"
                                />
                                Your browser does not support the audio element.
                              </audio>
                            </td>
                            <td>
                              <button class="btn btn-success">Publish</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>1074</b>
                            </td>

                            <td>Hopkins</td>
                            <td>
                              <audio controls="">
                                <source
                                  src="imgSelect/horse.ogg"
                                  type="audio/ogg"
                                />
                                Your browser does not support the audio element.
                              </audio>
                            </td>
                            <td>
                              <button class="btn btn-success">Publish</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- col-md-12 end -->
                  </div>
                  <div class="tab-pane fade" id="tab2-2">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <button
                        type="button"
                        class="btn btn-primary col-xs-12 btn-lg"
                        data-toggle="modal"
                        data-target="#addLang"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add Music Category
                      </button>
                    </div>

                    <div class="col-md-4"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>543</td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#editcat"
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
                            <td>category</td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#editcat"
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
                  </div>
                </div>
              </div>
              <!-- /.panel-body -->
              <!--/ End tabs content -->
            </div>
            <!-- /.panel -->
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
              <h4 class="modal-title">Add Music</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title</label
                  >
                  <label
                    class="col-sm-7 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title will add automatically</label
                  >
                </div>

                <br />
                <label
                  class="col-sm-4 control-label"
                  style="font-size: 15px; padding-top: 10px"
                  >Select Category</label
                >
                <div class="col-sm-7 controls">
                  <div>
                    <select class="langSelect col-xs-12" style="display: none">
                      <option selected="">Choose a Category</option>
                      <option>category2</option>
                      <option>category3</option>
                      <option>category4</option>
                      <option>category5</option>
                    </select>
                    <div
                      class="chosen-container chosen-container-single"
                      style="width: 0px"
                      title=""
                    >
                      <a class="chosen-single" tabindex="-1"
                        ><span>Choose a Category</span>
                        <div><b></b></div
                      ></a>
                      <div class="chosen-drop">
                        <div class="chosen-search">
                          <input type="text" autocomplete="off" />
                        </div>
                        <ul class="chosen-results"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div cl6ass="form-group">
                  <label class="col-md-4 control-label">upload :</label>
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
                          ><span class="fileinput-new">Select </span
                          ><span class="fileinput-exists">Change</span
                          ><input type="hidden" value="" name="..." /><input
                            type="file"
                            multiple=""
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
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Status</label
                  >
                  <div class="col-sm-7 controls">
                    <select class="langSelect col-xs-12" style="display: none">
                      <option selected="">Choose a Status</option>
                      <option>Publish</option>
                      <option>Unpublish</option>
                    </select>
                    <div
                      class="chosen-container chosen-container-single"
                      style="width: 0px"
                      title=""
                    >
                      <a class="chosen-single" tabindex="-1"
                        ><span>Choose a Status</span>
                        <div><b></b></div
                      ></a>
                      <div class="chosen-drop">
                        <div class="chosen-search">
                          <input type="text" autocomplete="off" />
                        </div>
                        <ul class="chosen-results"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
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
              <h4 class="modal-title">Edit Music</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title</label
                  >
                  <label
                    class="col-sm-7 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Title will add automatically</label
                  >
                </div>

                <br />
                <label
                  class="col-sm-4 control-label"
                  style="font-size: 15px; padding-top: 10px"
                  >Select Category</label
                >

                <div class="col-sm-7 controls">
                  <div>
                    <select class="langSelect col-xs-12" style="display: none">
                      <option selected="">Choose a Organization</option>
                      <option>org1</option>
                      <option>category2</option>
                      <option>category3</option>
                      <option>category4</option>
                      <option>category5</option>
                    </select>
                    <div
                      class="chosen-container chosen-container-single"
                      style="width: 0px"
                      title=""
                    >
                      <a class="chosen-single" tabindex="-1"
                        ><span>Choose a Organization</span>
                        <div><b></b></div
                      ></a>
                      <div class="chosen-drop">
                        <div class="chosen-search">
                          <input type="text" autocomplete="off" />
                        </div>
                        <ul class="chosen-results"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div cl6ass="form-group">
                  <label class="col-md-4 control-label">upload :</label>
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
                          ><span class="fileinput-new">Select </span
                          ><span class="fileinput-exists">Change</span
                          ><input type="hidden" value="" name="..." /><input
                            type="file"
                            multiple=""
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
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Status</label
                  >
                  <div class="col-sm-7 controls">
                    <select class="langSelect col-xs-12" style="display: none">
                      <option selected="">Choose a Status</option>
                      <option>Publish</option>
                      <option>Unpublish</option>
                    </select>
                    <div
                      class="chosen-container chosen-container-single"
                      style="width: 0px"
                      title=""
                    >
                      <a class="chosen-single" tabindex="-1"
                        ><span>Choose a Status</span>
                        <div><b></b></div
                      ></a>
                      <div class="chosen-drop">
                        <div class="chosen-search">
                          <input type="text" autocomplete="off" />
                        </div>
                        <ul class="chosen-results"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
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
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Category Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="title"
                      type="title"
                      class="form-control col-xs-12"
                      name="categ"
                      placeholder="Title"
                    />
                  </div>
                  <br />
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
              <h4 class="modal-title">Edit Category</h4>
            </div>
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Category Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="title"
                      type="title"
                      class="form-control col-xs-12"
                      name="categ"
                      placeholder="Title"
                    />
                  </div>
                  <br />
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