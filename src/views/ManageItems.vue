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

              <!-- Start tabs content -->
              <div class="panel-body">
                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab2-1">
                    <div class="col-md-12" style="padding-top: 30px">
                      <div class="col-md-12">
                        <div class="panel panel-default">
                          <div class="panel-body">
                            <div class="row">
                              <div
                                class="
                                  col-md-12 col-sm-12 col-xs-12
                                  table-responsive
                                "
                              >
                                <div
                                  id="products-table_wrapper"
                                  class="
                                    dataTables_wrapper
                                    form-inline
                                    no-footer
                                    force-table-responsive
                                  "
                                >
                                  <div class="row m-t-10">
                                    <div class="col-md-6">
                                      <div
                                        id="products-table_filter"
                                        class="dataTables_filter"
                                      >
                                        <label>
                                          <input
                                            type="search"
                                            class="form-control"
                                            aria-controls="products-table"
                                            placeholder="Search a product..."
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="DTTT_container">
                                        <a
                                          class="
                                            btn btn-default
                                            DTTT_button DTTT_button_csv
                                          "
                                          id="ToolTables_products-table_0"
                                          ><span>CSV</span></a
                                        >
                                        <a
                                          class="
                                            btn btn-default
                                            DTTT_button DTTT_button_xls
                                          "
                                          id="ToolTables_products-table_1"
                                          ><span>Excel</span></a
                                        >
                                        <a
                                          class="
                                            btn btn-default
                                            DTTT_button DTTT_button_pdf
                                          "
                                          id="ToolTables_products-table_2"
                                          ><span>PDF</span></a
                                        >
                                        <a
                                          class="
                                            btn btn-default
                                            DTTT_button DTTT_button_print
                                          "
                                          id="ToolTables_products-table_3"
                                          title="View print view"
                                          ><span>Print</span></a
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <table
                                    class="table table-striped table-primary"
                                    role="grid"
                                  >
                                    <thead>
                                      <tr role="row">
                                        <th
                                          tabindex="0"
                                          aria-controls="products-table"
                                          rowspan="1"
                                          colspan="1"
                                          aria-sort="ascending"
                                        >
                                          <strong>ID</strong>
                                        </th>
                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Product</strong>
                                        </th>
                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          colspan="1"
                                        >
                                          <strong>Reference</strong>
                                        </th>
                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Category</strong>
                                        </th>
                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Price</strong>
                                        </th>
                                        <th
                                          class="sorting"
                                          tabindex="0"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Date added</strong>
                                        </th>
                                        <th
                                          class="sorting_disabled"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Stock</strong>
                                        </th>
                                        <th
                                          class="text-center sorting_disabled"
                                          rowspan="1"
                                          colspan="1"
                                          aria-label="Sales
                                                "
                                          style="width: 96px"
                                        >
                                          <strong>Sales</strong>
                                        </th>
                                        <th
                                          class="text-center"
                                          rowspan="1"
                                          colspan="1"
                                        >
                                          <strong>Status</strong>
                                        </th>
                                        <th rowspan="1" colspan="1">
                                          <strong>Actions</strong>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr role="row" class="odd">
                                        <td class="sorting_1">1</td>
                                        <td>Product 1</td>
                                        <td>SV 456 878 647</td>
                                        <td>Women / Underwear</td>
                                        <td><strong>$25.20</strong></td>
                                        <td>02/03/2013</td>
                                        <td class="color-success">
                                          <div class="progress">
                                            <div
                                              class="
                                                progress-bar
                                                progress-bar-success
                                              "
                                              data-aria-valuetransitiongoal="75"
                                              aria-valuenow="75"
                                              style="width: 75%"
                                            >
                                              2654
                                            </div>
                                          </div>
                                        </td>
                                        <td class="text-center">
                                          <div class="panel-body">
                                            <span
                                              class="bar"
                                              style="display: none"
                                              >5,0,0,6,5,9,7,3,5,2</span
                                            ><svg
                                              class="peity"
                                              height="16"
                                              width="32"
                                            >
                                              <rect
                                                fill="#4D89F9"
                                                x="0.32"
                                                y="7.111111111111111"
                                                width="2.56"
                                                height="8.88888888888889"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="3.5200000000000005"
                                                y="15"
                                                width="2.5599999999999996"
                                                height="1"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="6.720000000000001"
                                                y="15"
                                                width="2.5599999999999987"
                                                height="1"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="9.92"
                                                y="5.333333333333334"
                                                width="2.5600000000000005"
                                                height="10.666666666666666"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="13.12"
                                                y="7.111111111111111"
                                                width="2.5600000000000023"
                                                height="8.88888888888889"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="16.32"
                                                y="0"
                                                width="2.5600000000000023"
                                                height="16"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="19.52"
                                                y="3.5555555555555554"
                                                width="2.5600000000000023"
                                                height="12.444444444444445"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="22.72"
                                                y="10.666666666666668"
                                                width="2.5600000000000023"
                                                height="5.333333333333332"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="25.919999999999998"
                                                y="7.111111111111111"
                                                width="2.5600000000000023"
                                                height="8.88888888888889"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="29.119999999999997"
                                                y="12.444444444444445"
                                                width="2.5600000000000023"
                                                height="3.5555555555555554"
                                              ></rect>
                                            </svg>
                                          </div>
                                          <!-- /.panel-body -->
                                        </td>
                                        <td class="text-center">
                                          <span
                                            class="label label-success w-300"
                                            >Online</span
                                          >
                                        </td>
                                        <td class="text-center">
                                          <a
                                            href="#"
                                            class="edit btn btn-sm btn-default"
                                            data-original-title="Edit"
                                            ><i class="fa fa-pencil"></i>
                                          </a>
                                          <a
                                            href="#"
                                            class="
                                              delete
                                              btn btn-sm btn-default
                                            "
                                            data-original-title="Remove"
                                            ><i class="fa fa-times-circle"></i>
                                          </a>
                                        </td>
                                      </tr>
                                      <tr role="row" class="odd">
                                        <td class="sorting_1">2</td>
                                        <td>
                                          Product 2
                                          <span class="label bg-red"
                                            >Low Stock</span
                                          >
                                        </td>
                                        <td>BG 588 735 457</td>
                                        <td>Menu / Shoes</td>
                                        <td><strong>$22.55</strong></td>
                                        <td>02/11/2013</td>
                                        <td class="color-success">
                                          <div class="progress">
                                            <div
                                              class="
                                                progress-bar progress-bar-danger
                                              "
                                              data-aria-valuetransitiongoal="21"
                                              aria-valuenow="21"
                                              style="width: 21%"
                                            >
                                              458
                                            </div>
                                          </div>
                                        </td>
                                        <td class="text-center">
                                          <div class="panel-body">
                                            <span
                                              class="bar"
                                              style="display: none"
                                              >2,5,8,6,5,2,4,8,1,2</span
                                            ><svg
                                              class="peity"
                                              height="16"
                                              width="32"
                                            >
                                              <rect
                                                fill="#4D89F9"
                                                x="0.32"
                                                y="12"
                                                width="2.56"
                                                height="4"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="3.5200000000000005"
                                                y="6"
                                                width="2.5599999999999996"
                                                height="10"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="6.720000000000001"
                                                y="0"
                                                width="2.5599999999999987"
                                                height="16"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="9.92"
                                                y="4"
                                                width="2.5600000000000005"
                                                height="12"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="13.12"
                                                y="6"
                                                width="2.5600000000000023"
                                                height="10"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="16.32"
                                                y="12"
                                                width="2.5600000000000023"
                                                height="4"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="19.52"
                                                y="8"
                                                width="2.5600000000000023"
                                                height="8"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="22.72"
                                                y="0"
                                                width="2.5600000000000023"
                                                height="16"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="25.919999999999998"
                                                y="14"
                                                width="2.5600000000000023"
                                                height="2"
                                              ></rect>
                                              <rect
                                                fill="#4D89F9"
                                                x="29.119999999999997"
                                                y="12"
                                                width="2.5600000000000023"
                                                height="4"
                                              ></rect>
                                            </svg>
                                          </div>
                                          <!-- /.panel-body -->
                                        </td>
                                        <td class="text-center">
                                          <span class="label label-danger w-300"
                                            >Deleted</span
                                          >
                                        </td>
                                        <td class="text-center">
                                          <a
                                            href="#"
                                            class="edit btn btn-sm btn-default"
                                            data-original-title="Edit"
                                            ><i class="fa fa-pencil"></i>
                                          </a>
                                          <a
                                            href="#"
                                            class="
                                              delete
                                              btn btn-sm btn-default
                                            "
                                            data-original-title="Remove"
                                            ><i class="fa fa-times-circle"></i
                                          ></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div class="row">
                                    <div class="col-md-6"></div>
                                    <div class="col-md-6 align-right">
                                      <div
                                        class="
                                          dataTables_paginate
                                          paging_simple_numbers
                                        "
                                        id="products-table_paginate"
                                      >
                                        <ul class="pagination">
                                          <li
                                            class="
                                              paginate_button
                                              previous
                                              disabled
                                            "
                                            aria-controls="products-table"
                                            tabindex="0"
                                            id="products-table_previous"
                                          >
                                            <a href="#">Previous</a>
                                          </li>
                                          <li
                                            class="paginate_button active"
                                            aria-controls="products-table"
                                            tabindex="0"
                                          >
                                            <a href="#">1</a>
                                          </li>
                                          <li
                                            class="paginate_button"
                                            aria-controls="products-table"
                                            tabindex="0"
                                          >
                                            <a href="#">2</a>
                                          </li>
                                          <li
                                            class="paginate_button next"
                                            aria-controls="products-table"
                                            tabindex="0"
                                            id="products-table_next"
                                          >
                                            <a href="#">Next</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- col-md-12 end -->
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