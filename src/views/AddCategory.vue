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
                <ul class="nav nav-tabs"></ul>
              </div>
              <!-- /.panel-heading -->
              <!--/ End tabs heading -->

              <!-- Start tabs content -->
              <div class="panel-body">
                <div class="tab-content">
                  <div class="fade in active" id="tab2-2">
                    <div class="col-md-3"></div>
                    <div class="col-md-3">
                      <button
                        type="button"
                        class="btn btn-primary col-xs-12 btn-lg"
                        data-toggle="modal"
                        data-target="#addLang"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add Category
                      </button>
                    </div>
                    <div class="col-md-3">
                      <button
                        type="button"
                        class="btn btn-primary col-xs-12 btn-lg"
                        data-toggle="modal"
                        data-target="#addLang1"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add Subcategory
                      </button>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>543</td>
                            <td>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#viewsub"
                                >subcategory</a
                              >
                            </td>
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
                            <td>
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#viewsub"
                                >subcategory</a
                              >
                            </td>
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
      <!-- view subcateg -->
      <div
        class="modal fade modal-primary"
        id="viewsub"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm" role="document">
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
              <h4 class="modal-title">Subcategory</h4>
            </div>
            <div class="modal-body">
              <row>
                <table class="table table-striped table-success">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Subcategory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center" style="width: 7%">
                        <b>1024</b>
                      </td>
                      <td>subcategory</td>
                    </tr>
                    <tr>
                      <td class="text-center" style="width: 7%">
                        <b>1074</b>
                      </td>
                      <td>subcategory</td>
                    </tr>
                  </tbody>
                </table>
              </row>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- ADD LANG -->
      <div
        class="modal fade modal-primary"
        id="addLang1"
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
              <h4 class="modal-title">Add Subcategory</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Select Category</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
                        <option selected="">Choose a category</option>
                        <option>category1</option>
                        <option>category2</option>
                        <option>category3</option>
                        <option>category4</option>
                        <option>category5</option>
                      </select>
                      <div
                        class="chosen-container chosen-container-single"
                        title=""
                        style="width: 0px"
                      >
                        <a class="chosen-single">
                          <span>Choose a category</span>
                          <div><b></b></div>
                        </a>
                        <div class="chosen-drop">
                          <div class="chosen-search">
                            <input
                              class="chosen-search-input"
                              type="text"
                              autocomplete="off"
                            />
                          </div>
                          <ul class="chosen-results"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Subcategory</label
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
              <h4 class="modal-title">Edit Subcategory</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Category</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
                        <option selected="">Choose a category</option>
                        <option>category1</option>
                        <option>category2</option>
                        <option>category3</option>
                        <option>category4</option>
                        <option>category5</option>
                      </select>
                      <div
                        class="chosen-container chosen-container-single"
                        title=""
                        style="width: 0px"
                      >
                        <a class="chosen-single">
                          <span>Choose a category</span>
                          <div><b></b></div>
                        </a>
                        <div class="chosen-drop">
                          <div class="chosen-search">
                            <input
                              class="chosen-search-input"
                              type="text"
                              autocomplete="off"
                            />
                          </div>
                          <ul class="chosen-results"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Subcategory</label
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
              <h4 class="modal-title">View Items</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="col-xs-4">
                    <div class="row">
                      <div class="col-xs-12">
                        <img
                          src="@/assets/img/media/realistic/4.jpg"
                          alt="..."
                          width="100%"
                          height="210px"
                          class="mt-5 mb-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-2">
                    <div class="row">
                      <div class="col-xs-12">
                        <img
                          src="@/assets/img/media/realistic/4.jpg"
                          alt="..."
                          width="100%"
                          height="100px"
                          class="mt-5 mb-5"
                        />
                      </div>
                      <div class="col-xs-12">
                        <img
                          src="@/assets/img/media/realistic/4.jpg"
                          alt="..."
                          width="100%"
                          height="100px"
                          class="mt-5 mb-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6" align="center">
                    <h4>Item Titel</h4>
                    <div class="input-group col-xs-12" style="font-size: 15px">
                      <label class="col-sm-4 control-label">Price</label>
                      <div class="col-sm-7 controls">
                        <p>1250$</p>
                      </div>
                    </div>
                    <div class="input-group col-xs-12" style="font-size: 15px">
                      <label class="col-sm-4 control-label">Status</label>
                      <div class="col-sm-7 controls">
                        <p>New</p>
                      </div>
                    </div>
                    <div class="input-group col-xs-12" style="font-size: 15px">
                      <label class="col-sm-4 control-label">Warranty</label>
                      <div class="col-sm-7 controls">
                        <p>No</p>
                      </div>
                    </div>
                    <div class="input-group col-xs-12" style="font-size: 15px">
                      <span>Desc</span>
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
                class="btn btn-success"
                data-toggle="modal"
                data-target="#edititem"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-toggle="modal"
                data-target="#removeLang"
              >
                Remove Item
              </button>
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