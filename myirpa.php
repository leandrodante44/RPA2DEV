<?php include 'menu.php'; ?> 
<script src="js/myirpa.js"></script> <!-- MAIN CONTENT--> 
<div class="main-content">
   <div class="section__content section__content--p30">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md-12">
            <br>
               <div class="overview-wrap">
                  <h2 class="title-1">Meus SAP-IRPAs</h2>
                  <!---<button class="au-btn au-btn-icon au-btn--blue"> <i class="zmdi zmdi-plus"></i>Novo RPA2Dev</button>---> 
                  <button class="au-btn au-btn-icon au-btn--blue" onclick="window.location='irpasave.php?u=<?php echo $_GET['u']?>'">
                  <i class="zmdi zmdi-plus"></i>Novo SAP-IRPA</button>
               </div>
            </div>
         </div>
         <style> .icon{ color: #fff !important; font-size: 24px; margin-right: 10px; } .badge-primary{ background-color:#712682; border-color:#712682; } </style>
         <div class="row m-t-25" id="divRPA"> </div>
         <div class="row">
            <div class="col-md-12">
               <div class="copyright">
                  <p>Copyright 2020 Lab2Dev. All rights reserved. Template by <a href="https://www.lab2dev.com">Lab2Dev</a>.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- END MAIN CONTENT-->