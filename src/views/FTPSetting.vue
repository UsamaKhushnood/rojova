<template>
  <div>
    <section id="page-content" style="min-height: 90vh">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="col-md-12">
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
                                <span class="glyphicon glyphicon-search"></span>
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
                            Add new server
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
                  </div>
                  <!-- Start order table -->
                  <div class="panel">
                    <div class="panel-heading"></div>
                    <!-- /.panel-heading -->
                    <div class="panel-body no-padding">
                      <div class="table-responsive">
                        <table
                          class="table table-bordered table-middle table-lilac"
                        >
                          <thead>
                            <tr>
                              <th>Server Adddress</th>
                              <th>Port</th>
                              <th>Username</th>
                              <th>Password</th>
                              <th>File Limit</th>
                              <th>Status</th>
                              <th class="text-center" style="width: 11%">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-warning">
                              <td>1922</td>
                              <td class="text-center" style="width: 7%">
                                <b>1024</b>
                              </td>
                              <td class="text-center" style="width: 1%">tst</td>

                              <td>Hopkins, Helen</td>
                              <td>a7med@hotmail.com</td>
                              <td>002224452565</td>

                              <td class="text-center">
                                <a
                                  href="table-samples.html#"
                                  class="btn btn-default btn-xs"
                                  data-toggle="modal"
                                  data-target="#edit_new_smile"
                                  data-placement="top"
                                  data-original-title="Edit"
                                  ><i class="fa fa-pencil"></i
                                ></a>
                                <a
                                  href="table-samples.html#"
                                  class="btn btn-default btn-xs"
                                  data-toggle="modal"
                                  data-target="#modal-remove"
                                  data-placement="top"
                                  data-original-title="Delete"
                                  ><i class="fa fa-times"></i
                                ></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- /.panel-body -->
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
              <h4 class="modal-title">Add New Server</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Server Address</span>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="Server Address"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Port</span>
                  <input
                    id="Port"
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="Port"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">User Name</span>
                  <input
                    id="userName"
                    type="text"
                    class="form-control"
                    name="LName"
                    placeholder="userName"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">password</span>
                  <input
                    id="pass"
                    type="password"
                    class="form-control"
                    name="email"
                    placeholder="password"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Http Link</span>
                  <input
                    id="Http"
                    type="text"
                    class="form-control"
                    name="PNumber"
                    placeholder="Http Link"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Country</span>
                  <input
                    id="Country"
                    type="text"
                    class="form-control"
                    name="Country"
                    placeholder="Country"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">File Limit</span>
                  <input
                    id="limit"
                    type="text"
                    class="form-control"
                    name="City"
                    placeholder="File Limit"
                  />
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
              <h4 class="modal-title">Edit Server</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group">
                  <span class="input-group-addon">Server Address</span>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="Server Address"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Port</span>
                  <input
                    id="Port"
                    type="text"
                    class="form-control"
                    name="Name"
                    placeholder="Port"
                  />
                </div>
                <br />

                <div class="input-group">
                  <span class="input-group-addon">User Name</span>
                  <input
                    id="userName"
                    type="text"
                    class="form-control"
                    name="LName"
                    placeholder="userName"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">password</span>
                  <input
                    id="pass"
                    type="password"
                    class="form-control"
                    name="email"
                    placeholder="password"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Http Link</span>
                  <input
                    id="Http"
                    type="text"
                    class="form-control"
                    name="PNumber"
                    placeholder="Http Link"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">Country</span>
                  <input
                    id="Country"
                    type="text"
                    class="form-control"
                    name="Country"
                    placeholder="Country"
                  />
                </div>
                <br />
                <div class="input-group">
                  <span class="input-group-addon">File Limit</span>
                  <input
                    id="limit"
                    type="text"
                    class="form-control"
                    name="City"
                    placeholder="File Limit"
                  />
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
      <div class="modal modal-success" role="dialog" id="add_new_gif">
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
              <h4 class="modal-title">Add New Gif</h4>
            </div>
            <div class="modal-body">
              <div class="row">
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
      <div class="modal modal-success" role="dialog" id="edit_new_gif">
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
              <h4 class="modal-title">Edit Gif</h4>
            </div>
            <div class="modal-body">
              <div class="row">
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