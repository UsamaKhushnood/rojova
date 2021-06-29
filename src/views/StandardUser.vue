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
                  <li>
                    <a
                      href="component-tabsaccordion.html#tab2-2"
                      data-toggle="tab"
                    >
                      <i class="fa fa-thumb-tack"></i>
                      <div>
                        <h6 class="text-strong">Male User</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="component-tabsaccordion.html#tab2-3"
                      data-toggle="tab"
                    >
                      <i class="fa fa-check"></i>
                      <div>
                        <h6 class="text-strong">Female User</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="component-tabsaccordion.html#tab2-4"
                      data-toggle="tab"
                    >
                      <i class="fa fa-trash-o"></i>
                      <div>
                        <h6 class="text-strong">Blocked User</h6>
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
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Join</th>
                            <th>Reports</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>

                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- col-md-12 end -->
                  </div>
                  <div class="tab-pane fade" id="tab2-2">
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Join</th>
                            <th>Reports</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>

                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab2-3">
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Join</th>
                            <th>Reports</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>

                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab2-4">
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Join</th>
                            <th>Reports</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#unblockuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-ban"
                                    data-original-title="unblock"
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
                            </td>
                          </tr>

                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#unblockuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-ban"
                                    data-original-title="unblock"
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tab2-5">
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Join</th>
                            <th>Reports</th>
                            <th>Status</th>
                            <th>Option</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
                            </td>
                          </tr>

                          <tr>
                            <td class="text-center" style="width: 7%">
                              <b>1024</b>
                            </td>
                            <td>
                              <img
                                style="
                                  border-radius: 50%;
                                  width: 40px;
                                  height: 35px;
                                "
                                src="@/assets/img/DE.png"
                              /><label>username</label>
                            </td>
                            <td>categ</td>
                            <td>categ</td>
                            <td align="center">
                              <button class="btn btn-success">active</button>
                            </td>
                            <td class="menu-action">
                              <div class="pdng5">
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
                                  data-target="#upgradeuser"
                                  class="btn btn-xs btn-success"
                                  ><i
                                    class="fa fa-usd"
                                    data-original-title="Upgrade"
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
              <h4 class="modal-title">Add Category</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Category Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Category Name"
                    />
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
              <h4 class="modal-title">Add Category</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="input-group col-xs-12">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Category Name</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="name"
                      type="text"
                      class="form-control col-xs-12"
                      name="name"
                      placeholder="Category Name"
                    />
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
        id="denied"
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
                    >Seclect Denied Reason</label
                  >
                  <div class="col-sm-7 controls">
                    <div>
                      <select
                        class="langSelect col-xs-12"
                        style="display: none"
                      >
                        <option selected="">Choose Denied Reason</option>
                        <option>reason1</option>
                        <option>reason2</option>
                        <option>reason3</option>
                        <option>reason4</option>
                        <option>reason5</option>
                      </select>
                      <div
                        class="chosen-container chosen-container-single"
                        style="width: 0px"
                        title=""
                      >
                        <a class="chosen-single" tabindex="-1"
                          ><span>Choose Denied Reason</span>
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
              </form>
            </div>
            <div class="modal-footer vd_bg-white">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save and close
              </button>
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
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
                        src="@/assets/img/BILLY-ARGEL-GINGA.jpg"
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
                  src="@/assets/img/DE.png"
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
                  src="@/assets/img/DE.png"
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
                  src="@/assets/img/DE.png"
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
                    ><input type="radio" name="optradio" />Premium</label
                  >
                </div>
                <div class="col-xs-2"></div>
                <div
                  align="center"
                  class="col-xs-5 panel-body"
                  style="border: 1px solid #ddd; padding: 25px"
                >
                  <label class="radio-inline"
                    ><input type="radio" name="optradio" />Diamond</label
                  >
                </div>

                <div class="input-group col-xs-12" style="padding-top: 15px">
                  <label
                    class="col-sm-4 control-label"
                    style="font-size: 15px; padding-top: 10px"
                    >Admin Password</label
                  >
                  <div class="col-sm-7 controls">
                    <input
                      id="title"
                      type="password"
                      class="form-control col-xs-12"
                      name="categ"
                      placeholder="Password"
                    />
                  </div>
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