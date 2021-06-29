<template>
  <div>
    <section id="page-content" style="min-height: 90vh">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="col-md-12">
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
                        <div class="repeater-header-right">
                          <div class="btn-group selectlist repeater-filters">
                            <button
                              type="button"
                              class="btn btn-success dropdown-toggle"
                              data-toggle="modal"
                              data-target="#add_new_smile"
                            >
                              Add Video
                            </button>

                            <input
                              class="hidden hidden-field"
                              name="filterSelection"
                              readonly="readonly"
                              aria-hidden="true"
                              type="text"
                            />
                          </div>
                          <div
                            class="btn-group repeater-views"
                            data-toggle="buttons"
                          ></div>
                        </div>
                      </div>
                      <div class="repeater-viewport" style="height: 275px">
                        <div class="thumbnail repeater-thumbnail">
                          <img
                            src="@/assets/img/BILLY-ARGEL-GINGA.jpg"
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

                          <div class="col-x-12" style="background-color: #ddd">
                            title
                          </div>
                        </div>
                      </div>

                      <div class="repeater-footer">
                        <div class="repeater-footer-left">
                          <div class="repeater-itemization">
                            <span
                              ><span class="repeater-start">1</span> -
                              <span class="repeater-end">10</span> of
                              <span class="repeater-count">12</span> items</span
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
                                    <span class="sr-only">Toggle Dropdown</span>
                                  </button>
                                  <ul class="dropdown-menu dropdown-menu-right">
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
              <h4 class="modal-title">Add New Video</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Title</span>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="Title"
                  />
                </div>
                <br />

                <div class="form-group">
                  <label class="col-md-4 control-label">Video upload:</label>
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
                          ><span class="fileinput-new">Select Video</span
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
              <h4 class="modal-title">Edit Video</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Title</span>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="Title"
                  />
                </div>
                <br />

                <div class="form-group">
                  <label class="col-md-4 control-label">Video upload:</label>
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
                          ><span class="fileinput-new">Select Video</span
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