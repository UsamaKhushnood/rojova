<template>
  <div>
    <section id="page-content" style="min-height: 90vh">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#Smileys" class="smile">All Posts</a>
              </li>
            </ul>

            <div class="tab-content">
              <div id="Smileys" class="tab-pane fade in active">
                <!-- Start repeater -->
                <div class="panel rounded shadow no-overflow">
                  <div class="panel-body">
                    <!-- Start repeater -->
                    <div class="fuelux">
                      <div
                        class="repeater"
                        data-staticheight="400"
                        id="myRepeater"
                        data-currentview="list"
                        data-viewtype="list"
                      >
                        <div class="repeater-header">
                          <div class="repeater-header-left">
                            <div class="repeater-search">
                              <div class="search input-group">
                                <input
                                  type="search"
                                  class="form-control"
                                  placeholder="Search"
                                />
                                <span class="input-group-btn">
                                  <button class="btn btn-default" type="button">
                                    <span
                                      class="glyphicon glyphicon-search"
                                    ></span>
                                    <span class="sr-only">Search</span>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12">
                          <div class="col-xs-2" align="center">
                            <div class="col-xs-12 time">
                              <b>A month <br />ago</b>
                            </div>
                            <div class="vl col-xs-12"></div>
                          </div>
                          <div class="col-xs-10 post">
                            <div class="col-xs-12 post-header">
                              <div class="col-xs-4 username">
                                <img
                                  style="
                                    border-radius: 50%;
                                    width: 40px;
                                    height: 35px;
                                  "
                                  src="@/assets/img//DE.png"
                                />
                                <label><b>username</b></label>
                                <br />
                                <p>cairo</p>
                              </div>
                              <div class="col-xs-8" align="right">
                                <a
                                  data-toggle="modal"
                                  data-target="#blockuser"
                                  class="btn btn-xs btn-danger"
                                  ><i
                                    class="fa fa-ban"
                                    data-original-title="block"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                                <a
                                  data-toggle="modal"
                                  data-target="#warnuser"
                                  class="btn btn-xs btn-default"
                                  ><i
                                    class="fa fa-exclamation-triangle"
                                    data-original-title="Warn"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                                <a
                                  data-toggle="modal"
                                  data-target="#removeLang"
                                  class="btn btn-xs btn-default"
                                  style="background-color: #009dc8"
                                  ><i
                                    style="color: #fff"
                                    class="fa fa-trash-o"
                                    data-original-title="Remove"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                              </div>
                            </div>
                            <div class="col-xs-12 post-content">
                              <div class="col-xs-5">
                                <p><b>post content</b></p>
                                <div class="col-xs-6">
                                  <img
                                    style="width: 100%; height: 100px"
                                    src="@/assets/img//BILLY-ARGEL-GINGA.jpg"
                                  />
                                </div>
                                <div class="col-xs-12 post-details">
                                  <span
                                    ><i
                                      class="fa fa-comments"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                  <span>
                                    <i
                                      class="fa fa-thumbs-up"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                  <span
                                    ><i
                                      class="fa fa-thumbs-down"
                                      aria-hidden="true"
                                    ></i>
                                    <label>2</label></span
                                  >
                                  <span style="color: red"
                                    ><i
                                      class="fa fa-heart"
                                      aria-hidden="true"
                                    ></i>
                                    <label>2</label></span
                                  >
                                  <span>
                                    <i
                                      class="fa fa-frown-o"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-2" align="center">
                            <div class="col-xs-12 time">
                              <b>A month <br />ago</b>
                            </div>
                            <div class="vl col-xs-12"></div>
                          </div>
                          <div class="col-xs-10 post">
                            <div class="col-xs-12 post-header">
                              <div class="col-xs-4 username">
                                <img
                                  style="
                                    border-radius: 50%;
                                    width: 40px;
                                    height: 35px;
                                  "
                                  src="@/assets/img//DE.png"
                                />
                                <label><b>username</b></label>
                                <br />
                                <p>cairo</p>
                              </div>
                              <div class="col-xs-8" align="right">
                                <a
                                  data-toggle="modal"
                                  data-target="#blockuser"
                                  class="btn btn-xs btn-danger"
                                  ><i
                                    class="fa fa-ban"
                                    data-original-title="block"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                                <a
                                  data-toggle="modal"
                                  data-target="#warnuser"
                                  class="btn btn-xs btn-default"
                                  ><i
                                    class="fa fa-exclamation-triangle"
                                    data-original-title="Warn"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                                <a
                                  data-toggle="modal"
                                  data-target="#removeLang"
                                  class="btn btn-xs btn-default"
                                  style="background-color: #009dc8"
                                  ><i
                                    style="color: #fff"
                                    class="fa fa-trash-o"
                                    data-original-title="Remove"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                  ></i
                                ></a>
                              </div>
                            </div>
                            <div class="col-xs-12 post-content">
                              <div class="col-xs-5">
                                <p><b>post content</b></p>
                                <div class="col-xs-6">
                                  <img
                                    style="width: 100%; height: 100px"
                                    src="@/assets/img//BILLY-ARGEL-GINGA.jpg"
                                  />
                                </div>
                                <div class="col-xs-12 post-details">
                                  <span
                                    ><i
                                      class="fa fa-comments"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                  <span>
                                    <i
                                      class="fa fa-thumbs-up"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                  <span
                                    ><i
                                      class="fa fa-thumbs-down"
                                      aria-hidden="true"
                                    ></i>
                                    <label>2</label></span
                                  >
                                  <span style="color: red"
                                    ><i
                                      class="fa fa-heart"
                                      aria-hidden="true"
                                    ></i>
                                    <label>2</label></span
                                  >
                                  <span>
                                    <i
                                      class="fa fa-frown-o"
                                      aria-hidden="true"
                                    ></i
                                    ><label>2</label></span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="repeater-footer">
                          <div class="repeater-footer-left">
                            <div class="repeater-itemization">
                              <span
                                ><span class="repeater-start">1</span> -
                                <span class="repeater-end">10</span> of
                                <span class="repeater-count">12</span>
                                items</span
                              >
                              <div
                                class="btn-group selectlist"
                                data-resize="auto"
                              >
                                <button
                                  type="button"
                                  class="btn btn-default dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span class="selected-label">10</span>
                                  <span class="caret"></span>
                                  <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <ul
                                  class="dropdown-menu"
                                  role="menu"
                                  style="width: 64px"
                                >
                                  <li data-value="5"><a href="#">5</a></li>
                                  <li data-value="10" data-selected="true">
                                    <a href="#">10</a>
                                  </li>
                                  <li data-value="20"><a href="#">20</a></li>
                                  <li
                                    data-value="50"
                                    data-foo="bar"
                                    data-fizz="buzz"
                                  >
                                    <a href="t#">50</a>
                                  </li>
                                  <li data-value="100"><a href="#">100</a></li>
                                </ul>
                                <input
                                  class="hidden hidden-field"
                                  name="itemsPerPage"
                                  readonly="readonly"
                                  aria-hidden="true"
                                  type="text"
                                />
                              </div>
                              <span>Per Page</span>
                            </div>
                          </div>
                          <div class="repeater-footer-right">
                            <div class="repeater-pagination">
                              <button
                                type="button"
                                class="btn btn-default btn-sm repeater-prev"
                                disabled="disabled"
                              >
                                <span
                                  class="glyphicon glyphicon-chevron-left"
                                ></span>
                                <span class="sr-only">Previous Page</span>
                              </button>
                              <label class="page-label" id="myPageLabel"
                                >Page</label
                              >
                              <div class="repeater-primaryPaging active">
                                <div
                                  class="
                                    input-group input-append
                                    dropdown
                                    combobox
                                  "
                                >
                                  <input
                                    type="text"
                                    class="form-control"
                                    aria-labelledby="myPageLabel"
                                  />
                                  <div class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <span class="caret"></span>
                                      <span class="sr-only"
                                        >Toggle Dropdown</span
                                      >
                                    </button>
                                    <ul
                                      class="dropdown-menu dropdown-menu-right"
                                    >
                                      <li data-value="1"><a href="#">1</a></li>
                                      <li data-value="2"><a href="#">2</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="text"
                                class="form-control repeater-secondaryPaging"
                                aria-labelledby="myPageLabel"
                              />
                              <span
                                >of <span class="repeater-pages">2</span></span
                              >
                              <button
                                type="button"
                                class="btn btn-default btn-sm repeater-next"
                              >
                                <span
                                  class="glyphicon glyphicon-chevron-right"
                                ></span>
                                <span class="sr-only">Next Page</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--/ End repeater -->
                  </div>
                  <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
              </div>
              <div id="Gifs" class="tab-pane fade">
                <!-- Start repeater -->
                <div class="panel rounded shadow no-overflow">
                  <div class="panel-body">
                    <!-- Start repeater -->
                    <div class="fuelux">
                      <div
                        class="repeater"
                        data-staticheight="400"
                        id="myRepeater"
                      >
                        <div class="repeater-header">
                          <div class="repeater-header-left">
                            <div class="repeater-search">
                              <div class="search input-group">
                                <input
                                  type="search"
                                  class="form-control"
                                  placeholder="Search"
                                />
                                <span class="input-group-btn">
                                  <button class="btn btn-default" type="button">
                                    <span
                                      class="glyphicon glyphicon-search"
                                    ></span>
                                    <span class="sr-only">Search</span>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="repeater-header-right">
                            <div
                              class="btn-group selectlist repeater-filters"
                              align="center"
                            >
                              <button
                                type="button"
                                class="btn btn-success"
                                data-toggle="modal"
                                data-target="#add_new_smile"
                              >
                                Add New Banner
                              </button>

                              <input
                                class="hidden hidden-field"
                                name="filterSelection"
                                readonly="readonly"
                                aria-hidden="true"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          class="repeater-viewport"
                          style="min-height: 255px"
                        >
                          <div class="thumbnail repeater-thumbnail">
                            <img
                              src="@/assets/img//BILLY-ARGEL-GINGA.jpg"
                              style="height: 97px"
                            />
                            <div class="img-description">
                              <button type="button" class="btn btn-success">
                                <i
                                  class="fa fa-pencil"
                                  data-toggle="modal"
                                  data-target="#edit_new_smile"
                                ></i>
                              </button>
                              <button
                                class="btn btn-danger"
                                data-toggle="modal"
                                data-target="#modal-remove"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="repeater-footer">
                          <div class="repeater-footer-left">
                            <div class="repeater-itemization">
                              <span
                                ><span class="repeater-start"></span> -
                                <span class="repeater-end"></span> of
                                <span class="repeater-count"></span> items</span
                              >
                              <div
                                class="btn-group selectlist"
                                data-resize="auto"
                              >
                                <button
                                  type="button"
                                  class="btn btn-default dropdown-toggle"
                                  data-toggle="dropdown"
                                >
                                  <span class="selected-label">&nbsp;</span>
                                  <span class="caret"></span>
                                  <span class="sr-only">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                  <li data-value="5"><a href="#">5</a></li>
                                  <li data-value="10" data-selected="true">
                                    <a href="#">10</a>
                                  </li>
                                  <li data-value="20"><a href="#">20</a></li>
                                  <li
                                    data-value="50"
                                    data-foo="bar"
                                    data-fizz="buzz"
                                  >
                                    <a href="t#">50</a>
                                  </li>
                                  <li data-value="100"><a href="#">100</a></li>
                                </ul>
                                <input
                                  class="hidden hidden-field"
                                  name="itemsPerPage"
                                  readonly="readonly"
                                  aria-hidden="true"
                                  type="text"
                                />
                              </div>
                              <span>Per Page</span>
                            </div>
                          </div>
                          <div class="repeater-footer-right">
                            <div class="repeater-pagination">
                              <button
                                type="button"
                                class="btn btn-default btn-sm repeater-prev"
                              >
                                <span
                                  class="glyphicon glyphicon-chevron-left"
                                ></span>
                                <span class="sr-only">Previous Page</span>
                              </button>
                              <label class="page-label" id="myPageLabel"
                                >Page</label
                              >
                              <div class="repeater-primaryPaging active">
                                <div
                                  class="
                                    input-group input-append
                                    dropdown
                                    combobox
                                  "
                                >
                                  <input
                                    type="text"
                                    class="form-control"
                                    aria-labelledby="myPageLabel"
                                  />
                                  <div class="input-group-btn">
                                    <button
                                      type="button"
                                      class="btn btn-default dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <span class="caret"></span>
                                      <span class="sr-only"
                                        >Toggle Dropdown</span
                                      >
                                    </button>
                                    <ul
                                      class="dropdown-menu dropdown-menu-right"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                              <input
                                type="text"
                                class="form-control repeater-secondaryPaging"
                                aria-labelledby="myPageLabel"
                              />
                              <span
                                >of <span class="repeater-pages"></span
                              ></span>
                              <button
                                type="button"
                                class="btn btn-default btn-sm repeater-next"
                              >
                                <span
                                  class="glyphicon glyphicon-chevron-right"
                                ></span>
                                <span class="sr-only">Next Page</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--/ End repeater -->
                  </div>
                  <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.body-content -->
      <!--/ End body content -->
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
              <h4 class="modal-title">Add New Banner</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <form id="input-mask">
                  <div class="input-group">
                    <span class="input-group-addon">Title</span>
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="title"
                    />
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
                  <br />
                  <div class="input-group">
                    <span class="input-group-addon">Url</span>
                    <input
                      id="url"
                      type="url"
                      class="form-control"
                      name="url"
                      placeholder="Url"
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
                          style="
                            width: 200px;
                            height: 150px;
                            line-height: 150px;
                          "
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
                </form>
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
      <div
        class="modal fade modal-danger"
        id="blockuser"
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
              <h4 class="modal-title vd_white">Block User</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <img
                  style="border-radius: 50%; width: 40px; height: 35px"
                  src="@/assets/img//DE.png"
                /><label style="padding-left: 5px">username</label>
              </div>
              <div class="form-group clearfix">
                <label class="col-sm-12 control-label"
                  ><b>Block User for(days)</b></label
                >
                <br />
                <div class="col-sm-12 controls">
                  <input
                    class="col-sm-12"
                    style="padding: 5px"
                    type="text"
                    placeholder="Type number of days"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-danger"
        id="warnuser"
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
              <h4 class="modal-title vd_white">Warn User</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <img
                  style="border-radius: 50%; width: 40px; height: 35px"
                  src="@/assets/img//DE.png"
                /><label style="padding-left: 5px">username</label>
              </div>
              <div class="form-group clearfix panel">
                <label class="col-sm-12 control-label"
                  ><b>Select warning cause</b></label
                >
                <br />
                <div class="col-sm-12 controls">
                  <select class="col-sm-12" style="padding: 5px">
                    <option>cause1</option>
                    <option>cause2</option>
                    <option>cause3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Warn
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-success"
        id="upgradeuser"
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
              <h4 class="modal-title vd_white">Upgrade to Premium</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <img
                  style="border-radius: 50%; width: 40px; height: 35px"
                  src="@/assets/img//DE.png"
                /><label style="padding-left: 5px">username</label>
              </div>
              <div
                class="form-group clearfix panel-body"
                style="font-size: 20px"
              >
                <div
                  align="center"
                  class="col-xs-5 panel-body"
                  style="border: 1px solid #ddd; padding: 25px"
                >
                  <label class="radio-inline"
                    ><input type="radio" name="optradio" />One Month</label
                  >
                </div>
                <div class="col-xs-2"></div>
                <div
                  align="center"
                  class="col-xs-5 panel-body"
                  style="border: 1px solid #ddd; padding: 25px"
                >
                  <label class="radio-inline"
                    ><input type="radio" name="optradio" />One year</label
                  >
                </div>
              </div>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-danger"
        id="unblockuser"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm" role="document">
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
              <h4>Delete User</h4>
            </div>
            <div class="modal-body" align="center">
              <label style="color: red; font-size: 35px"
                ><i class="fa fa-exclamation-circle"></i
              ></label>
              <br />
              <h4>Are you sure ?</h4>
              <br />
              <p>To unblock this user!</p>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Unblock
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                No, Cancel
              </button>
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
        <div class="modal-dialog modal-sm" role="document">
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
              <h4>Delete User</h4>
            </div>
            <div class="modal-body" align="center">
              <label style="color: red; font-size: 35px"
                ><i class="fa fa-exclamation-circle"></i
              ></label>
              <br />
              <h4>Are you sure ?</h4>
              <br />
              <p>delete this user permentely</p>
            </div>
            <div class="modal-footer vd_bg-white">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Yes, delete it!
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                No, Cancel plx!
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--modal-->
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
              <h4 class="modal-title">Edit Banner</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <form id="input-mask">
                  <div class="input-group">
                    <span class="input-group-addon">Title</span>
                    <input
                      id="title"
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="title"
                    />
                  </div>
                  <br />
                  <div class="input-group">
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
                  <br />
                  <div class="input-group">
                    <span class="input-group-addon">Url</span>
                    <input
                      id="url"
                      type="url"
                      class="form-control"
                      name="url"
                      placeholder="Url"
                    />
                  </div>
                  <br />
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
                          style="
                            width: 200px;
                            height: 150px;
                            line-height: 150px;
                          "
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
                </form>
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