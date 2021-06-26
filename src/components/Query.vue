<template>
<div class="">
  <!-- Main content -->
  <div class="row">
    <div class="col-md-12"></div>
    <div class="col-md-12">
      <div class="panel-heading">
        <div class="pull-left">
          <h3 class="panel-title"></h3>
          <h4 style="margin-top: 20px;padding-bottom: 5px;border-bottom: 2px solid #3c8dbc;">
            Order ShopName for month 02.2019 - from 01.02.2019 to 28.02.2019
          </h4>
        </div>
        <div class="pull-right my-width" style="margin-top: 20px;">
          <div class="search input-group">
            <input type="search" class="form-control" placeholder="Search Current Orders">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">
                <span class="fa fa-search"></span>
                <span class="sr-only">Search</span>
              </button>
              <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button">
                <i class="ace-icon fa fa-file-excel-o icon-on-right bigger-110"></i>
              </a>
              <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button">
                <i class="ace-icon fa fa-file-pdf-o icon-on-right bigger-110"></i>
              </a>
              <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button">
                <i class="ace-icon fa fa-print icon-on-right bigger-110"></i>
              </a>
            </span>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="col-md-12">
      <table id="example1" class="table table-bordered table-striped" style="margin-top: 20px;">
        <thead>
          <tr>
            <th> Date</th>
            <th>Total Order</th>
            <th>Total Caneled</th>
            <th>Cash Total</th>
            <th>Online Total</th>
            <th>Canceld Total</th>
            <th style="width: 8%">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>19.04.2019</td>
            <td>100</td>
            <td class="bg-aqua disabled color-palette text-center">20</td>
            <td class="bg-maroon disabled color-palette text-center">2365,50 €</td>
            <td class="bg-yellow disabled color-palette text-center">2365,50 €</td>
            <td class="bg-teal disabled color-palette text-center">2365,50 €</td>
            <td>
              <BsModal
                smaller
                type="white"
                :height="600"
              >
                <template #button>
                  <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                </template>
                <div class="">
                  <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                </div>
              </BsModal>
            </td>
          </tr>
          <tr>
            <td>19.04.2019</td>
            <td>150</td>
            <td class="bg-aqua disabled color-palette text-center">10</td>
            <td class="bg-maroon disabled color-palette text-center">2365,50 €</td>
            <td class="bg-yellow disabled color-palette text-center">2365,50 €</td>
            <td class="bg-teal disabled color-palette text-center">2365,50 €</td>
            <td>
              <BsModal
                smaller
                type="white"
                :height="600"
              >
                <template #button>
                  <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                </template>
                <div class="">
                  <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                </div>
              </BsModal>
            </td>
          </tr>
          <tr>
            <td>19.04.2019</td>
            <td>150</td>
            <td class="bg-aqua disabled color-palette text-center">10</td>
            <td class="bg-maroon disabled color-palette text-center">2365,50 €</td>
            <td class="bg-yellow disabled color-palette text-center">2365,50 €</td>
            <td class="bg-teal disabled color-palette text-center">2365,50 €</td>
            <td>
              <BsModal
                smaller
                type="white"
                :height="600"
              >
                <template #button>
                  <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                </template>
                <div class="">
                  <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                </div>
              </BsModal>
            </td>
          </tr>
          <tr>
            <td>19.04.2019</td>
            <td>150</td>
            <td class="bg-aqua disabled color-palette text-center">10</td>
            <td class="bg-maroon disabled color-palette text-center">2365,50 €</td>
            <td class="bg-yellow disabled color-palette text-center">2365,50 €</td>
            <td class="bg-teal disabled color-palette text-center">2365,50 €</td>
            <td>
              <BsModal
                smaller
                type="white"
                :height="600"
              >
                <template #button>
                  <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                </template>
                <div class="">
                  <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                </div>
              </BsModal>
            </td>
          </tr>
          <tr>
            <td>19.04.2019</td>
            <td>150</td>
            <td class="bg-aqua disabled color-palette text-center">10</td>
            <td class="bg-maroon disabled color-palette text-center">2365,50 €</td>
            <td class="bg-yellow disabled color-palette text-center">2365,50 €</td>
            <td class="bg-teal disabled color-palette text-center">2365,50 €</td>
            <td>
              <BsModal
                smaller
                type="white"
                :height="600"
              >
                <template #button>
                  <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                </template>
                <div class="">
                  <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                </div>
              </BsModal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import BsModal from '@/components/BsModal.vue'

export default {
  name: 'Query',
  components: {
    BsModal
  }
}
</script>
