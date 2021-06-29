<template>
  <div>
    <section id="page-content">
      <!--/ End header content -->

      <!-- Start body content -->
      <div class="body-content animated fadeIn">
        <div class="row">
          <div class="vd_content-section clearfix" style="min-height: 90vh">
            <div class="row mrgn15-0">
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
                  >&nbsp;Add Language
                </button>
              </div>
              <div class="col-md-4"></div>
            </div>

            <div class="row">
              <div class="col-md-12" style="padding-top: 30px">
                <table class="table table-striped table-primary">
                  <colgroup>
                    <col width="10%" />
                    <col width="15%" />
                    <col width="40%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="15%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Icon</th>
                      <th>Language</th>
                      <th>Progress</th>
                      <th>Done</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="@/assets/img/AE.png" alt="" width="48" height="32" />
                      </td>
                      <td>Arabic</td>
                      <td>
                        <div class="menu-info mrgn0">
                          <div class="progress progress-sm mrgn0">
                            <div
                              style="width: 95%"
                              class="progress-bar progress-bar-info"
                            >
                              95%
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>543</td>
                      <td>1345</td>
                      <td class="menu-action">
                        <div class="pdng5">
                          <a
                            data-toggle="modal"
                            data-target="#editLang"
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
                      <td>
                        <img src="@/assets/img/GB.png" alt="" width="48" height="32" />
                      </td>
                      <td>English</td>
                      <td>
                        <div class="menu-info mrgn0">
                          <div class="progress progress-sm mrgn0">
                            <div
                              style="width: 45%"
                              class="progress-bar progress-bar-info"
                            >
                              45%
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>1543</td>
                      <td>1345</td>
                      <td class="menu-action">
                        <div class="pdng5">
                          <a
                            data-toggle="modal"
                            data-target="#editLang"
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
            <!-- row end -->
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
              <h4 class="modal-title">Add Language</h4>
            </div>
            <div class="modal-body">
              <form method="post">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Icon</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
                        <option selected="">Choose a language</option>
                        <option value="AE" data-img-src="@/assets/img/AE.png">
                          Arabic
                        </option>
                        <option value="GB" data-img-src="@/assets/img/GB.png">
                          English (GB)
                        </option>
                        <option value="US" data-img-src="@/assets/img/US.png">
                          English (USA)
                        </option>
                        <option value="FR" data-img-src="@/assets/img/FR.png">
                          French
                        </option>
                        <option value="DE" data-img-src="@/assets/img/DE.png">
                          Deutsch
                        </option>
                        <option value="IT" data-img-src="@/assets/img/IT.png">
                          Italian
                        </option>
                        <option value="ES" data-img-src="@/assets/img/ES.png">
                          Spanish
                        </option>
                      </select>
                      <div
                        class="chosen-container chosen-container-single"
                        title=""
                        style="width: 0px"
                      >
                        <a class="chosen-single">
                          <span>Choose a language</span>
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
                    >Title</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="title"
                      type="title"
                      class="form-control col-xs-12"
                      name="email"
                      placeholder="Title"
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
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- EDIT LANG -->
      <div
        class="modal right fade modal-success"
        id="editLang"
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
              <h4 class="modal-title">Edit Arabic Language</h4>
            </div>
            <div class="modal-body h100">
              <div class="row">
                <div class="col-md-12">
                  <table class="table table-striped table-primary">
                    <colgroup>
                      <col width="10%" />
                      <col width="15%" />
                      <col width="40%" />
                      <col width="10%" />
                      <col width="10%" />
                      <col width="15%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>File</th>
                        <th>Progress</th>
                        <th>Done</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Application</td>
                        <td>Main</td>
                        <td>
                          <div class="menu-info mrgn0">
                            <div class="progress progress-sm mrgn0">
                              <div
                                style="width: 95%"
                                class="progress-bar progress-bar-info"
                              >
                                95%
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>1243</td>
                        <td>1345</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#editTranslation"
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
                        <td>Application</td>
                        <td>Task</td>
                        <td>
                          <div class="menu-info mrgn0">
                            <div class="progress progress-sm mrgn0">
                              <div
                                style="width: 95%"
                                class="progress-bar progress-bar-info"
                              >
                                95%
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>1243</td>
                        <td>1345</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#editTranslation"
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
                        <td>Application</td>
                        <td>Projects</td>
                        <td>
                          <div class="menu-info mrgn0">
                            <div class="progress progress-sm mrgn0">
                              <div
                                style="width: 95%"
                                class="progress-bar progress-bar-info"
                              >
                                95%
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>1243</td>
                        <td>1345</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#editTranslation"
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
                        <td>Application</td>
                        <td>Leads</td>
                        <td>
                          <div class="menu-info mrgn0">
                            <div class="progress progress-sm mrgn0">
                              <div
                                style="width: 95%"
                                class="progress-bar progress-bar-info"
                              >
                                95%
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>1243</td>
                        <td>1345</td>
                        <td class="menu-action">
                          <div class="pdng5">
                            <a
                              data-toggle="modal"
                              data-target="#editTranslation"
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
              <h4 class="modal-title vd_white">REMOVE LANGUAGE</h4>
            </div>
            <div class="modal-body"></div>
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