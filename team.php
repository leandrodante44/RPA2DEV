<?php
   include 'menu.php';
?>
<script src="js/team.js"></script>
<!-- MAIN CONTENT-->
<div class="main-content">
   <div class="section__content section__content--p30">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md-12">
               <div class="overview-wrap">
                  <h2 class="title-1">Team Lab2Dev</h2>
                  <div>
                  <button class="au-btn au-btn-icon au-btn--blue" onclick="window.location='rpa2devstudio.php?u=<?php echo $_GET['u']?>'">
                  <i class="zmdi zmdi-plus"></i>Novo RPA2Dev</button>
                  <button class="au-btn au-btn-icon au-btn--blue" onclick="window.location='irpasave.php?u=<?php echo $_GET['u']?>'">
                  <i class="zmdi zmdi-plus"></i>Novo SAP-IRPA</button>
                  </div>
               </div>
            </div>
         </div>
         <div class="row m-t-25">
            <div class="col-sm-6 col-lg-3">
               <div class="overview-item overview-item--c1">
                  <div class="overview__inner">
                     <div class="overview-box clearfix" style="margin-left: 10;">
                        <div class="icon">
                           <i class="zmdi zmdi-android"></i>
                        </div>
                        <div class="text">
                           <h2 id="c1" style="margin-top: -10%;text-align: right;font-size: 58px;">XX</h2>
                           <span><b>rpa2dev</b> gerados pelo studio</span>
                        </div>
                     </div>
                     <br>
                     <br>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-3">
               <div class="overview-item overview-item--c2">
                  <div class="overview__inner">
                     <div class="overview-box clearfix" style="margin-left: 10;">
                        <div class="icon">
                           <i class="zmdi zmdi-laptop"></i>
                        </div>
                        <div class="text">
                           <h2 id="c2" style="margin-top: -10%;text-align: right;font-size: 58px;">XX</h2>
                           <span>aplicações automatizadas</span>
                        </div>
                     </div>
                     <br>
                     <br>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-3">
               <div class="overview-item overview-item--c3">
                  <div class="overview__inner">
                     <div class="overview-box clearfix" style="margin-left: 10;">
                        <div class="icon">
                           <i class="zmdi zmdi-mouse"></i>
                        </div>
                        <div class="text">
                           <h2 id="c3" style="margin-top: -10%;text-align: right;font-size: 58px;">XX</h2>
                           <span>ações manuais otimizadas</span>
                        </div>
                     </div>
                     <br>
                     <br>
                  </div>
               </div>
            </div>
            <div class="col-sm-6 col-lg-3">
               <div class="overview-item overview-item--c4">
                  <div class="overview__inner">
                     <div class="overview-box clearfix" style="margin-left: 10;">
                        <div class="icon">
                           <i class="zmdi zmdi-time-restore"></i>
                        </div>
                        <div class="text">
                           <h2 id="c4" style="margin-top: -3%;text-align: right;font-size: 44px;">XX</h2>
                           <span>tempo de execução ganho</span>
                        </div>
                     </div>
                     <br>
                     <br>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-12">
               <h2 class="title-1 m-b-25">Últimos RPA2Dev</h2>
               <div class="table-responsive table--no-card m-b-40">
                  <table class="table table-borderless table-striped table-earning">
                     <thead>
                        <tr>
                           <th style="text-align: center;">Nome</th>
                           <th style="text-align: center;">Projeto</th>
                           <th style="text-align: center;">Tipo do RPA</th>
                           <th style="text-align: center;">Criador</th>
                           <th style="text-align: center;">Data de Criação</th>
                           <th style="text-align: center;">Nro de Ações</th>
                        </tr>
                     </thead>
                     <tbody id="divTable">
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <style>
            th{
            background-color: #722183;
            }
         </style>
         <div class="row">
            <div class="col-md-12">
               <div class="copyright">
                  <p>Copyright � 2020 Lab2Dev. All rights reserved. Template by <a href="https://www.lab2dev.com">Lab2Dev</a>.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- END MAIN CONTENT-->