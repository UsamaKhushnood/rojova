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
                        <h6 class="text-strong">Manage Donation</h6>
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
                        <h6 class="text-strong">Add Organization</h6>
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
                        >&nbsp;Add Organization
                      </button>
                    </div>

                    <div class="col-md-4"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Organization Name</th>
                            <th>Total Reach</th>
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
                        >&nbsp;Add New Donation
                      </button>
                    </div>

                    <div class="col-md-4"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Total Reach</th>

                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>543</td>
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
                            <td>total</td>
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
              <h4 class="modal-title">Add Donation</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Organization Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Organization Name"
                    />
                  </div>
                </div>

                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Bank account</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="acc"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Bank account"
                    />
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Paypal account</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="paypal"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Paypal account"
                    />
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Address</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="Address"
                      type="text"
                      class="form-control col-xs-12"
                      name="Address"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label class="col-md-4 control-label">upload Logo:</label>
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
                          ><span class="fileinput-new">Select Logo</span
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
              <h4 class="modal-title">Edit Organziation</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Organization Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Organization Name"
                    />
                  </div>
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Bank account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id="acc"
                        type="text"
                        class="form-control col-xs-12"
                        name="name"
                        placeholder="Bank account"
                      />
                    </div>
                    <br />
                  </div>
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Paypal account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id="paypal"
                        type="text"
                        class="form-control col-xs-12"
                        name="name"
                        placeholder="Paypal account"
                      />
                    </div>
                    <br />
                  </div>
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Address</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id="Address"
                        type="text"
                        class="form-control col-xs-12"
                        name="Address"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label class="col-md-4 control-label">upload Logo:</label>
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
                          ><span class="fileinput-new">Select Logo</span
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
              <h4 class="modal-title">Add Donation</h4>
            </div>
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Title</label
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
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Description</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="desc"
                      type="desc"
                      class="form-control col-xs-12"
                      name="desc"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Seclect organization</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
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
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Tags</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      type="text"
                      value="Tag 1,Tag 2,Tag 3"
                      data-role="tagsinput"
                      placeholder="Type and enter"
                      style="display: none"
                    />
                    <div class="bootstrap-tagsinput">
                      <span class="tag label label-info"
                        >Tag 1<span data-role="remove"></span
                      ></span>
                      <span class="tag label label-info"
                        >Tag 2<span data-role="remove"></span
                      ></span>
                      <span class="tag label label-info"
                        >Tag 3<span data-role="remove"></span
                      ></span>
                      <input
                        type="text"
                        placeholder="Type and enter"
                        style="width: 14em !important"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <span class="input-group-addon">Start Date</span>
                      <input
                        class="form-control input-sm"
                        data-inputmask="'alias': 'date'"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group">
                      <span class="input-group-addon">End Date</span>
                      <input
                        class="form-control input-sm"
                        data-inputmask="'alias': 'date'"
                      />
                    </div>
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
              <h4 class="modal-title">Edit Donation</h4>
            </div>
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                  >
                    Title</label
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
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Description</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="desc"
                      type="desc"
                      class="form-control col-xs-12"
                      name="desc"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Seclect organization</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
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
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Tags</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      type="text"
                      value="Tag 1,Tag 2,Tag 3"
                      data-role="tagsinput"
                      placeholder="Type and enter"
                      style="display: none"
                    />
                    <div class="bootstrap-tagsinput">
                      <span class="tag label label-info"
                        >Tag 1<span data-role="remove"></span
                      ></span>
                      <span class="tag label label-info"
                        >Tag 2<span data-role="remove"></span
                      ></span>
                      <span class="tag label label-info"
                        >Tag 3<span data-role="remove"></span
                      ></span>
                      <input
                        type="text"
                        placeholder="Type and enter"
                        style="width: 14em !important"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div class="input-group col-xs-12">
                  <div class="col-lg-6">
                    <div class="input-group">
                      <span class="input-group-addon">Start Date</span>
                      <input
                        class="form-control input-sm"
                        data-inputmask="'alias': 'date'"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="input-group">
                      <span class="input-group-addon">End Date</span>
                      <input
                        class="form-control input-sm"
                        data-inputmask="'alias': 'date'"
                      />
                    </div>
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