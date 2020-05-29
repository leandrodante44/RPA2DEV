<?php
   include 'menu.php';
   ?>

<script src="js/irpasave.js"></script>
<?php
   if(isset($_GET['r']) && !empty($_GET["r"])){
      echo '<script>editMode("'.$_GET['r'].'")</script>';
      $edit = 'true';
   }else{
      $edit = 'false';
   }
?>
<div class="main-content">
   <div class="section__content section__content--p30">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md-12">
               <div class="overview-wrap">
                  <h2 class="title-1">SAP-IRPA</h2>
                  <!---<button class="au-btn au-btn-icon au-btn--blue">
                     <i class="zmdi zmdi-plus"></i>Novo RPA2Dev</button>--->
               </div>
            </div>
         </div>
         <br>
         <!--- --->
         <div class="row">
         
            <div class="col-lg-12">
               <div class="card">
                  <div class="card-header">
                     <strong>Descrição</strong> do IRPA
                  </div>
                  <div class="card-body card-block">
                  <div class="row m-t-25" id="divRPA"> </div>
                     <form action="processirpa.php?u=<?php echo $_GET['u']?>" method="post" enctype="multipart/form-data" class="form-horizontal">
                        <input type="hidden" id="hdniduser" name="hdniduser" value="<?php echo $_GET['u']?>">
                        <input type="hidden" id="hdnedit" name="hdnedit" value="<?php echo $edit ?>">
                        <input type="hidden" id="hdnirpa" name="hdnirpa" value="<?php if($edit == 'true'){echo $_GET['r'];}else{echo '1';} ?>">
                        <input type="hidden" id="hdnpublic" name="hdnpublic" value="true">
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="text-input" class=" form-control-label">Nome do Processo</label>
                           </div>
                           <div class="col-12 col-md-9">
                              <input type="text" name="txtnome" id="txtnome" placeholder="" class="form-control" required>
                              <small class="form-text text-muted">Ex: Preenchimento de Venda
                              </small>
                           </div>
                        </div>
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="text-input" class=" form-control-label">Projeto</label>
                           </div>
                           <div class="col-12 col-md-9">
                              <input type="text" name="txtprojeto" id="txtprojeto" placeholder="" class="form-control">
                              <small class="form-text text-muted">Ex: Usiminas - Movimentação
                              </small>
                           </div>
                        </div>
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="textarea-input" class=" form-control-label">Descrição do IRPA</label>
                           </div>
                           <div class="col-12 col-md-9">
                              <textarea name="txtdesc" id="txtdesc" rows="9" placeholder="Descrição..." class="form-control"></textarea>
                           </div>
                        </div>
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="textarea-input" class=" form-control-label">IRPA Público</label>
                           </div>
                           <div class="col-12 col-md-9">
                           <label class="switch switch-3d switch-primary ">
                                 <input type="checkbox" class="switch-input" id="chkpublic" name="chkpublic" value="1" checked="true">
                                 <span class="switch-label"></span>
                                 <span class="switch-handle"></span>
                              </label>
                           </div>
                        </div>
                        
                        <hr>
                        <h4 class="text-sm-center mt-2 mb-1">Upload</h4>
                        <br>
                        <center>
                        <div class="col col-md-8">
                        <div class="form-group">
                                 <div class="input-group">
                                    <div class="input-group-addon">IRPA PROJECT</div>
                                    <input type="file" id="userfile" name="userfile" class="form-control">
                                    <div class="input-group-addon">
                                       <i class="fa fa-file"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col col-md-8">
                           <div class="form-group" style="display:<?php if(!($edit == 'true')){echo 'none';} ?>">
                                 <div class="input-group">
                                    <div class="input-group-addon">Arquivo Atual</div>
                                    <input type="text" id="name_file" name="name_file" class="form-control" readonly>
                                    <div class="input-group-addon">
                                       <i class="fa fa-file"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </center>
                     
                  </div>
                  <div class="card-footer" >
                     <button type="submit" class="btn btn-primary" id="btnSalvar" style="float:right" >
                     <i class="fa fa-dot-circle-o"></i> Salvar IRPA
                     </button>
                     <button type="reset" class="btn btn-danger ">
                     <i class="fa fa-ban"></i> Cancelar
                     </button>
                  </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>