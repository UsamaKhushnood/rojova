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
                        <h6 class="text-strong">Add News</h6>
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
                        <h6 class="text-strong">Manage News</h6>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="component-tabsaccordion.html#tab2-3"
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
                        data-target="#addHistory"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add New News
                      </button>
                    </div>

                    <div class="col-md-4"></div>
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>News Title</th>
                            <th>News Description</th>
                            <th>News Category</th>
                            <th>News Image</th>
                            <th>Status</th>
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
                            <td>categ</td>
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
                            <td>subcategory</td>
                            <td>subcategory</td>
                            <td>subcategory</td>
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
                    <div class="col-md-12" style="padding-top: 30px">
                      <table class="table table-striped table-primary">
                        <thead>
                          <tr>
                            <th>News Title</th>
                            <th>News Description</th>
                            <th>News Category</th>
                            <th>News Image</th>
                            <th>Status</th>
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
                            <td>categ</td>
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
                            <td>subcategory</td>
                            <td>subcategory</td>
                            <td>subcategory</td>
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
                  <div class="tab-pane fade in" id="tab2-3">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <button
                        type="button"
                        class="btn btn-primary col-xs-12 btn-lg"
                        data-toggle="modal"
                        data-target="#addcat"
                      >
                        <span class="append-icon"
                          ><i class="fa fa-plus-square"></i></span
                        >&nbsp;Add New Category
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
                            <td>categ</td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#EditDonation"
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
                            <td>subcategory</td>
                            <td class="menu-action">
                              <div class="pdng5">
                                <a
                                  data-toggle="modal"
                                  data-target="#EditDonation"
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
      <!--modal-->
      <div class="modal modal-success" role="dialog" id="addHistory">
        <div class="modal-dialog modal-lg">
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
              <h4 class="modal-title">Add News</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="panel-heading no-padding">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a
                        href="component-tabsaccordion.html#tab2-6"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">EN</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-7"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">DE</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-8"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">KR</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-9"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">TR</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-10"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">IR</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.panel-heading -->
                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab2-6">
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >News Title</label
                      >
                      <div class="col-sm-7 controls">
                        <input
                          id="acc"
                          type="text"
                          class="form-control col-xs-12"
                          name="name"
                          placeholder="News title"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="input-group col-xs-12">
                                      <label class="col-sm-4 control-label" style="font-size:15px;padding-top:10px">News Desc.</label>
                                        <div class="col-sm-7 controls">
                                            <div class="reviewcontent" id="news" style="visibility: hidden; display: none;"> Type... </div>
                                            <div id="cke_news" class="cke_1 cke cke_reset cke_chrome cke_editor_news cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_news_arialbl"><span id="cke_news_arialbl" class="cke_voice_label">Rich Text Editor, news</span><div class="cke_inner cke_reset" role="presentation"><span id="cke_1_top" class="cke_top cke_reset_all" role="presentation" style="height: auto; user-select: none;"><span id="cke_7" class="cke_voice_label">Editor toolbars</span><span id="cke_1_toolbox" class="cke_toolbox" role="group" aria-labelledby="cke_7" onmousedown="return false;"><span id="cke_10" class="cke_toolbar" aria-labelledby="cke_10_label" role="toolbar"><span id="cke_10_label" class="cke_voice_label">Clipboard/Undo</span>
                                            <span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_11" class="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Cut')" title="Cut" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_11_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(2,event);" onfocus="return CKEDITOR.tools.callFunction(3,event);" onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span class="cke_button_icon cke_button__cut_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_11_label" class="cke_button_label cke_button__cut_label" aria-hidden="false">Cut</span></a><a id="cke_12" 
                                            class="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copy')" title="Copy" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_12_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(5,event);" onfocus="return CKEDITOR.tools.callFunction(6,event);" onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span class="cke_button_icon cke_button__copy_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -216px;background-size:auto;">&nbsp;</span><span id="cke_12_label" class="cke_button_label cke_button__copy_label" aria-hidden="false">Copy</span></a><a id="cke_13" class="cke_button cke_button__paste  cke_button_off" href="javascript:void('Paste')" title="Paste" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_13_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(8,event);" onfocus="return CKEDITOR.tools.callFunction(9,event);" onclick="CKEDITOR.tools.callFunction(10,this);return false;"><span class="cke_button_icon cke_button__paste_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_13_label" class="cke_button_label cke_button__paste_label" aria-hidden="false">Paste</span></a><a id="cke_14" class="cke_button cke_button__pastetext  cke_button_off" href="javascript:void('Paste as plain text')" title="Paste as plain text" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_14_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(11,event);" onfocus="return CKEDITOR.tools.callFunction(12,event);" onclick="CKEDITOR.tools.callFunction(13,this);return false;">
                                            <span class="cke_button_icon cke_button__pastetext_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -720px;background-size:auto;">&nbsp;</span><span id="cke_14_label" class="cke_button_label cke_button__pastetext_label" aria-hidden="false">Paste as plain text</span></a>
                                            <a id="cke_15" class="cke_button cke_button__pastefromword  cke_button_off" href="javascript:void('Paste from Word')" title="Paste from Word" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_15_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(14,event);" onfocus="return CKEDITOR.tools.callFunction(15,event);" onclick="CKEDITOR.tools.callFunction(16,this);return false;"><span class="cke_button_icon cke_button__pastefromword_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -768px;background-size:auto;">&nbsp;</span><span id="cke_15_label" class="cke_button_label cke_button__pastefromword_label" aria-hidden="false">Paste from Word</span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_16" class="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Undo')" title="Undo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_16_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(17,event);" onfocus="return CKEDITOR.tools.callFunction(18,event);" onclick="CKEDITOR.tools.callFunction(19,this);return false;">
                                            <span class="cke_button_icon cke_button__undo_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -1008px;background-size:auto;">&nbsp;</span><span id="cke_16_label" class="cke_button_label cke_button__undo_label" aria-hidden="false">Undo</span></a><a id="cke_17" class="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Redo')" title="Redo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_17_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(20,event);" onfocus="return CKEDITOR.tools.callFunction(21,event);" onclick="CKEDITOR.tools.callFunction(22,this);return false;"><span class="cke_button_icon cke_button__redo_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -960px;background-size:auto;">&nbsp;</span><span id="cke_17_label" class="cke_button_label cke_button__redo_label" aria-hidden="false">Redo</span></a></span>
                                            <span class="cke_toolbar_end"></span></span><span id="cke_18" class="cke_toolbar" aria-labelledby="cke_18_label" role="toolbar"><span id="cke_18_label" class="cke_voice_label">Editing</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_19" class="cke_button cke_button__scayt cke_button_off " href="javascript:void('')" title="" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_19_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(23,event);" onfocus="return CKEDITOR.tools.callFunction(24,event);" onclick="CKEDITOR.tools.callFunction(25,this);return false;"><span class="cke_button_icon cke_button__scayt_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -888px;background-size:auto;">&nbsp;</span><span id="cke_19_label" class="cke_button_label cke_button__scayt_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_20" class="cke_toolbar" aria-labelledby="cke_20_label" role="toolbar"><span id="cke_20_label" class="cke_voice_label">Links</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_21" class="cke_button cke_button__link  cke_button_off" href="javascript:void('Link')" title="Link" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_21_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(26,event);" onfocus="return CKEDITOR.tools.callFunction(27,event);" onclick="CKEDITOR.tools.callFunction(28,this);return false;"><span class="cke_button_icon cke_button__link_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -528px;background-size:auto;">&nbsp;</span>
                                            <span id="cke_21_label" class="cke_button_label cke_button__link_label" aria-hidden="false">Link</span></a><a id="cke_22" class="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Unlink')" title="Unlink" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_22_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(29,event);" onfocus="return CKEDITOR.tools.callFunction(30,event);" onclick="CKEDITOR.tools.callFunction(31,this);return false;"><span class="cke_button_icon cke_button__unlink_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -552px;background-size:auto;">&nbsp;</span><span id="cke_22_label" class="cke_button_label cke_button__unlink_label" aria-hidden="false">Unlink</span></a><a id="cke_23" class="cke_button cke_button__anchor  cke_button_off" href="javascript:void('Anchor')" title="Anchor" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_23_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(32,event);" onfocus="return CKEDITOR.tools.callFunction(33,event);" onclick="CKEDITOR.tools.callFunction(34,this);return false;"><span class="cke_button_icon cke_button__anchor_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -504px;background-size:auto;">&nbsp;</span><span id="cke_23_label" class="cke_button_label cke_button__anchor_label" aria-hidden="false">Anchor</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_24" class="cke_toolbar" aria-labelledby="cke_24_label" role="toolbar"><span id="cke_24_label" class="cke_voice_label">Insert</span><span class="cke_toolbar_start"></span>
                                            <span class="cke_toolgroup" role="presentation"><a id="cke_25" class="cke_button cke_button__image  cke_button_off" href="javascript:void('Image')" title="Image" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_25_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(35,event);" onfocus="return CKEDITOR.tools.callFunction(36,event);" onclick="CKEDITOR.tools.callFunction(37,this);return false;">
                                                <span class="cke_button_icon cke_button__image_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_25_label" class="cke_button_label cke_button__image_label" aria-hidden="false">Image</span></a><a id="cke_26" class="cke_button cke_button__table  cke_button_off" href="javascript:void('Table')" title="Table" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_26_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(38,event);" onfocus="return CKEDITOR.tools.callFunction(39,event);" onclick="CKEDITOR.tools.callFunction(40,this);return false;"><span class="cke_button_icon cke_button__table_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -912px;background-size:auto;">&nbsp;</span>
                                                <span id="cke_26_label" class="cke_button_label cke_button__table_label" aria-hidden="false">Table</span></a><a id="cke_27" class="cke_button cke_button__horizontalrule  cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_27_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(41,event);" onfocus="return CKEDITOR.tools.callFunction(42,event);" onclick="CKEDITOR.tools.callFunction(43,this);return false;"><span class="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -336px;background-size:auto;">&nbsp;</span><span id="cke_27_label" class="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span></a><a id="cke_28" class="cke_button cke_button__specialchar  cke_button_off" href="javascript:void('Insert Special Character')" title="Insert Special Character" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_28_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(44,event);" onfocus="return CKEDITOR.tools.callFunction(45,event);" onclick="CKEDITOR.tools.callFunction(46,this);return false;"><span class="cke_button_icon cke_button__specialchar_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -864px;background-size:auto;">&nbsp;</span><span id="cke_28_label" class="cke_button_label cke_button__specialchar_label" aria-hidden="false">Insert Special Character</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_29" class="cke_toolbar" aria-labelledby="cke_29_label" role="toolbar"><span id="cke_29_label" class="cke_voice_label">Tools</span><span class="cke_toolbar_start"></span>
                                                <span class="cke_toolgroup" role="presentation"><a id="cke_30" class="cke_button cke_button__maximize  cke_button_off" href="javascript:void('Maximize')" title="Maximize" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_30_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(47,event);" onfocus="return CKEDITOR.tools.callFunction(48,event);" onclick="CKEDITOR.tools.callFunction(49,this);return false;"><span class="cke_button_icon cke_button__maximize_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -672px;background-size:auto;">&nbsp;</span><span id="cke_30_label" class="cke_button_label cke_button__maximize_label" aria-hidden="false">Maximize</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_31" class="cke_toolbar" aria-labelledby="cke_31_label" role="toolbar"><span id="cke_31_label" class="cke_voice_label">Document</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_32" class="cke_button cke_button__source  cke_button_off" href="javascript:void('Source')" title="Source" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_32_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(50,event);" onfocus="return CKEDITOR.tools.callFunction(51,event);" onclick="CKEDITOR.tools.callFunction(52,this);return false;"><span class="cke_button_icon cke_button__source_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -840px;background-size:auto;">&nbsp;</span><span id="cke_32_label" class="cke_button_label cke_button__source_label" aria-hidden="false">Source</span></a></span><span class="cke_toolbar_end"></span></span><span class="cke_toolbar_break"></span><span id="cke_33" class="cke_toolbar" aria-labelledby="cke_33_label" role="toolbar"><span id="cke_33_label" class="cke_voice_label">Basic Styles</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_34" class="cke_button cke_button__bold  cke_button_off" href="javascript:void('Bold')" title="Bold" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_34_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(53,event);" onfocus="return CKEDITOR.tools.callFunction(54,event);" onclick="CKEDITOR.tools.callFunction(55,this);return false;"><span class="cke_button_icon cke_button__bold_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -24px;background-size:auto;">&nbsp;</span><span id="cke_34_label" class="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span></a><a id="cke_35" class="cke_button cke_button__italic  cke_button_off" href="javascript:void('Italic')" title="Italic" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_35_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(56,event);" onfocus="return CKEDITOR.tools.callFunction(57,event);" onclick="CKEDITOR.tools.callFunction(58,this);return false;"><span class="cke_button_icon cke_button__italic_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -48px;background-size:auto;">&nbsp;</span><span id="cke_35_label" class="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span></a><a id="cke_36" class="cke_button cke_button__strike  cke_button_off" href="javascript:void('Strike Through')" title="Strike Through" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_36_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(59,event);" onfocus="return CKEDITOR.tools.callFunction(60,event);" onclick="CKEDITOR.tools.callFunction(61,this);return false;"><span class="cke_button_icon cke_button__strike_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -72px;background-size:auto;">&nbsp;</span><span id="cke_36_label" class="cke_button_label cke_button__strike_label" aria-hidden="false">Strike Through</span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_37" class="cke_button cke_button__removeformat  cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_37_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(62,event);" onfocus="return CKEDITOR.tools.callFunction(63,event);" onclick="CKEDITOR.tools.callFunction(64,this);return false;"><span class="cke_button_icon cke_button__removeformat_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -792px;background-size:auto;">&nbsp;</span><span id="cke_37_label" class="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_38" class="cke_toolbar" aria-labelledby="cke_38_label" role="toolbar"><span id="cke_38_label" class="cke_voice_label">Paragraph</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_39" class="cke_button cke_button__numberedlist  cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_39_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(65,event);" onfocus="return CKEDITOR.tools.callFunction(66,event);" onclick="CKEDITOR.tools.callFunction(67,this);return false;"><span class="cke_button_icon cke_button__numberedlist_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -648px;background-size:auto;">&nbsp;</span><span id="cke_39_label" class="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span></a><a id="cke_40" class="cke_button cke_button__bulletedlist  cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_40_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(68,event);" onfocus="return CKEDITOR.tools.callFunction(69,event);" onclick="CKEDITOR.tools.callFunction(70,this);return false;"><span class="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -600px;background-size:auto;">&nbsp;</span><span id="cke_40_label" class="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_41" class="cke_button cke_button__outdent cke_button_disabled " href="javascript:void('Decrease Indent')" title="Decrease Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_41_label" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(71,event);" onfocus="return CKEDITOR.tools.callFunction(72,event);" onclick="CKEDITOR.tools.callFunction(73,this);return false;"><span class="cke_button_icon cke_button__outdent_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -456px;background-size:auto;">&nbsp;</span><span id="cke_41_label" class="cke_button_label cke_button__outdent_label" aria-hidden="false">Decrease Indent</span></a><a id="cke_42" class="cke_button cke_button__indent  cke_button_off" href="javascript:void('Increase Indent')" title="Increase Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_42_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(74,event);" onfocus="return CKEDITOR.tools.callFunction(75,event);" onclick="CKEDITOR.tools.callFunction(76,this);return false;"><span class="cke_button_icon cke_button__indent_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -408px;background-size:auto;">&nbsp;</span><span id="cke_42_label" class="cke_button_label cke_button__indent_label" aria-hidden="false">Increase Indent</span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_43" class="cke_button cke_button__blockquote  cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_43_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(77,event);" onfocus="return CKEDITOR.tools.callFunction(78,event);" onclick="CKEDITOR.tools.callFunction(79,this);return false;"><span class="cke_button_icon cke_button__blockquote_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 -168px;background-size:auto;">&nbsp;</span><span id="cke_43_label" class="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_44" class="cke_toolbar" aria-labelledby="cke_44_label" role="toolbar"><span id="cke_44_label" class="cke_voice_label">Styles</span><span class="cke_toolbar_start"></span><span id="cke_8" class="cke_combo cke_combo__styles  cke_combo_off" role="presentation"><span id="cke_8_label" class="cke_combo_label">Styles</span><a class="cke_combo_button" hidefocus="true" title="Formatting Styles" tabindex="-1" "="" href="javascript:void('Formatting Styles')" role="button" aria-labelledby="cke_8_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(81,event,this);" onfocus="return CKEDITOR.tools.callFunction(82,event);" onclick="CKEDITOR.tools.callFunction(80,this);return false;"><span id="cke_8_text" class="cke_combo_text cke_combo_inlinelabel">Styles</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span id="cke_9" class="cke_combo cke_combo__format  cke_combo_off" role="presentation"><span id="cke_9_label" class="cke_combo_label">Format</span><a class="cke_combo_button" hidefocus="true" title="Paragraph Format" tabindex="-1" "="" href="javascript:void('Paragraph Format')" role="button" aria-labelledby="cke_9_label" aria-haspopup="true" onkeydown="return CKEDITOR.tools.callFunction(84,event,this);" onfocus="return CKEDITOR.tools.callFunction(85,event);" onclick="CKEDITOR.tools.callFunction(83,this);return false;"><span id="cke_9_text" class="cke_combo_text cke_combo_inlinelabel">Format</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_45" class="cke_toolbar" aria-labelledby="cke_45_label" role="toolbar"><span id="cke_45_label" class="cke_voice_label">about</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_46" class="cke_button cke_button__about  cke_button_off" href="javascript:void('About CKEditor')" title="About CKEditor" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_46_label" aria-haspopup="false" onkeydown="return CKEDITOR.tools.callFunction(86,event);" onfocus="return CKEDITOR.tools.callFunction(87,event);" onclick="CKEDITOR.tools.callFunction(88,this);return false;"><span class="cke_button_icon cke_button__about_icon" style="background-image:url(file:///E:/projects/Dashboard/html/ckeditor/plugins/icons.png?t=E6FD);background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_46_label" class="cke_button_label cke_button__about_label" aria-hidden="false">About CKEditor</span></a></span><span class="cke_toolbar_end"></span></span></span></span><div id="cke_1_contents" class="cke_contents cke_reset" role="presentation" style="height: 200px;"><span id="cke_50" class="cke_voice_label">Press ALT 0 for help</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Rich Text Editor, news" aria-describedby="cke_50" tabindex="0" allowtransparency="true" style="width: 0px; height: 100%;"></iframe></div><span id="cke_1_bottom" class="cke_bottom cke_reset_all" role="presentation" style="user-select: none;"><span id="cke_1_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Resize" onmousedown="CKEDITOR.tools.callFunction(0, event)">◢</span><span id="cke_1_path_label" class="cke_voice_label">Elements path</span><span id="cke_1_path" class="cke_path" role="group" aria-labelledby="cke_1_path_label"><span class="cke_path_empty">&nbsp;</span></span></span></div></div>
                                                        <!-- <script>
                                                            CKEDITOR.replace( 'news' );
                                                        </script>    -->
                                        </div>
                                  </div>
                    <br />
                    <div class="form-group">
                      <label class="col-md-4 control-label">News Image:</label>
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
                              ><span class="fileinput-new">Select Image</span
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
                    <br />
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >Seclect Category</label
                      >
                      <div class="col-sm-7 controls">
                        <div>
                          <select
                            class="langSelect col-xs-12"
                            style="display: none"
                          >
                            <option selected="">Choose a Category</option>
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
                    </div>

                    <br />
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >Status</label
                      >
                      <div class="col-sm-7 controls">
                        <div>
                          <select
                            class="langSelect col-xs-12"
                            style="display: none"
                          >
                            <option selected="">Published</option>
                            <option>org1</option>
                            <option>category2</option>
                          </select>
                          <div
                            class="chosen-container chosen-container-single"
                            style="width: 0px"
                            title=""
                          >
                            <a class="chosen-single" tabindex="-1"
                              ><span>Published</span>
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
                  </div>
                  <div class="tab-pane fade" id="tab2-7">tst</div>
                  <div class="tab-pane fade" id="tab2-8">tst2</div>
                  <div class="tab-pane fade" id="tab2-9">tst3</div>
                  <div class="tab-pane fade" id="tab2-10">tst4</div>
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

      <!--modal-->
      <div class="modal modal-success" role="dialog" id="EditMedia">
        <div class="modal-dialog modal-lg">
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
              <h4 class="modal-title">Edit News</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="panel-heading no-padding">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a
                        href="component-tabsaccordion.html#tab2-6"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">EN</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-7"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">DE</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-8"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">KR</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-9"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">TR</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="component-tabsaccordion.html#tab2-10"
                        data-toggle="tab"
                      >
                        <div>
                          <h6 class="text-strong">IR</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- /.panel-heading -->
                <div class="tab-content">
                  <div class="tab-pane fade in active" id="tab2-6">
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >News Title</label
                      >
                      <div class="col-sm-7 controls">
                        <input
                          id="acc"
                          type="text"
                          class="form-control col-xs-12"
                          name="name"
                          placeholder="News title"
                        />
                      </div>
                    </div>
                    <br />
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >News Desc.</label
                      >
                      <div class="col-sm-7 controls">
                        <div class="reviewcontent" id="news">Type...</div>
                        <!-- <script>
                          CKEDITOR.replace("news");
                        </script> -->
                      </div>
                    </div>
                    <br />
                    <div class="form-group">
                      <label class="col-md-4 control-label">News Image:</label>
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
                              ><span class="fileinput-new">Select Image</span
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
                    <br />
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >Seclect Category</label
                      >
                      <div class="col-sm-7 controls">
                        <div>
                          <select
                            class="langSelect col-xs-12"
                            style="display: none"
                          >
                            <option selected="">Choose a Category</option>
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
                    </div>

                    <br />
                    <div class="input-group col-xs-12">
                      <label
                        class="col-sm-4 control-label"
                        style="font-size: 15px; padding-top: 10px"
                        >Status</label
                      >
                      <div class="col-sm-7 controls">
                        <div>
                          <select
                            class="langSelect col-xs-12"
                            style="display: none"
                          >
                            <option selected="">Published</option>
                            <option>org1</option>
                            <option>category2</option>
                          </select>
                          <div
                            class="chosen-container chosen-container-single"
                            style="width: 0px"
                            title=""
                          >
                            <a class="chosen-single" tabindex="-1"
                              ><span>Published</span>
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
                  </div>
                  <div class="tab-pane fade" id="tab2-7">tst</div>
                  <div class="tab-pane fade" id="tab2-8">tst2</div>
                  <div class="tab-pane fade" id="tab2-9">tst3</div>
                  <div class="tab-pane fade" id="tab2-10">tst4</div>
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
      <div class="modal modal-success" role="dialog" id="EditDonation">
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
              <h4 class="modal-title">Edit Category</h4>
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
                      id="title"
                      type="text"
                      class="form-control col-xs-12"
                      name="title"
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
      <div class="modal modal-success" role="dialog" id="addcat">
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
                      id="title"
                      type="text"
                      class="form-control col-xs-12"
                      name="title"
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
        id="addLang"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
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
              <h4 class="modal-title">Add Category</h4>
            </div>
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="row">
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Organization Name</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Organization Name "
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Bank Account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Bank Account"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Paypal Account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Paypal Account"
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
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Address "
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >City</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Phone</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Phone Number"
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
                          style="
                            width: 200px;
                            height: 150px;
                            line-height: 150px;
                          "
                        ></div>
                        <div>
                          <span class="btn btn-info btn-file"
                            ><span class="fileinput-new">Select Image</span
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
      <!--                edit category-->

      <div
        class="modal fade modal-primary"
        id="editcat"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Add maincategory"
        aria-hidden="true"
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
              <h4 class="modal-title">Edit Category</h4>
            </div>
            <div class="modal-body" id="input-mask">
              <form method="post">
                <div class="row">
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Organization Name</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Organization Name "
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Bank Account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Bank Account"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Paypal Account</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Paypal Account"
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
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Address "
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >City</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="input-group col-xs-12">
                    <label
                      class="col-sm-4 control-label"
                      style="font-size: 15px; padding-top: 10px"
                      >Phone</label
                    >
                    <div class="col-sm-7 controls">
                      <input
                        id=""
                        type="title"
                        class="form-control col-xs-12"
                        name="categ"
                        placeholder="Phone Number"
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
                          style="
                            width: 200px;
                            height: 150px;
                            line-height: 150px;
                          "
                        ></div>
                        <div>
                          <span class="btn btn-info btn-file"
                            ><span class="fileinput-new">Select Image</span
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