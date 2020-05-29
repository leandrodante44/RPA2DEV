<?php
   include 'menu.php';
   ?>

<script src="js/studio.js"></script>
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
                  <h2 class="title-1">RPA2Dev Studio</h2>
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
                     <strong>Descrição</strong> do RPA2Dev
                  </div>
                  <div class="card-body card-block"> 
                     <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                        <input type="hidden" id="hdniduser" name="hdniduser" value="<?php echo $_GET['u']?>">
                        <input type="hidden" id="hdnedit" name="hdnedit" value="<?php echo $edit ?>">
                        <input type="hidden" id="hdnrpa" name="hdnrpa" value="<?php if($edit == 'true'){echo $_GET['r'];}else{echo '1';} ?>">
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="text-input" class=" form-control-label">Nome do Cenário de Teste</label>
                           </div>
                           <div class="col-12 col-md-9">
                              <input type="text" name="text-input" id="txtnome" placeholder="" class="form-control">
                              <small class="form-text text-muted">Ex: Tela de Venda
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
                           <!-- Default switch -->
                        <div class="col-md-4">
                           
                        </div>
                        </div>
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label for="textarea-input" class=" form-control-label">Descrição do Teste</label>
                           </div>
                           <div class="col-12 col-md-9">
                              <textarea name="textarea-input" id="txtdesc" rows="9" placeholder="Descrição..." class="form-control"></textarea>
                           </div>
                        </div>
                        <div class="row form-group">
                           <div class="col col-md-3">
                              <label class=" form-control-label">Opções de Export.</label>
                           </div>
                           <div class="col col-md-3">
                              <div class="form-check">
                                 <div class="checkbox">
                                    <label for="checkbox1" class="form-check-label ">
                                    <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" class="form-check-input"> XLSX
                                    </label>
                                 </div>
                                 <div class="checkbox">
                                    <label for="checkbox2" class="form-check-label ">
                                    <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" class="form-check-input"> Print
                                    </label>
                                 </div>
                                 <div class="checkbox">
                                    <label for="checkbox3" class="form-check-label ">
                                    <input type="checkbox" id="checkbox3" name="chemocckbox3" value="option3" class="form-check-input"> Log
                                    </label>
                                 </div>
                              </div>
                              <br>
                              <label class="switch switch-3d switch-primary ">
                                 <input type="checkbox" class="switch-input" id="chkpublic" checked="true">
                                 <span class="switch-label"></span>
                                 <span class="switch-handle"></span>
                              </label>
                              <label for="text-input" class=" form-control-label">RPA Público</label>
                           </div>
                           <div class="col col-md-6">
                              <div class="form-group">
                                 <div class="input-group">
                                    <div class="input-group-addon">Link</div>
                                    <input type="email" id="txtlink" name="txtlink" class="form-control">
                                    <div class="input-group-addon">
                                       <i class="fa fa-link"></i>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group">
                                 <div class="input-group">
                                    <div class="input-group-addon">Login</div>
                                    <input type="text" id="txtlogin" name="txtlogin" class="form-control">
                                    <div class="input-group-addon">
                                       <i class="fa fa-user"></i>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group">
                                 <div class="input-group">
                                    <div class="input-group-addon">Senha</div>
                                    <input type="password" id="txtpassword" name="txtpassword" class="form-control">
                                    <div class="input-group-addon">
                                       <i class="fa fa-asterisk"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr>
                        <h4 class="text-sm-center mt-2 mb-1">Workflow</h4>
                        <br>
                        <center>
                           <button type="button" class="btn btn-outline-success btn-sm" onclick="addItem('c')">
                           <i class="fa fa-hand-o-up"></i> Click
                           </button>
                           <button type="button" class="btn btn-outline-warning btn-sm" onclick="addItem('a')">
                           <i class="fa fa-clock-o"></i> Aguardar
                           </button>
                           <button type="button" class="btn btn-outline-info btn-sm" onclick="addItem('v')">
                           <i class="fa fa-check-square"></i> Validar
                           </button>
                           <br>
                           <style>
                              .div_work {
                              /* border-color: #712682; */
                              border: solid 1px #712682;
                              color: #fff;
                              background-color: #fff;
                              /* margin-top: 10px; */
                              margin: 20px 15%;
                              border-radius: 10px;
                              }
                              .acao_workflow {
                              background-color: #e5a2f3;
                              margin: 20px;
                              border-radius: 10px;
                              color: #fff;
                              padding: 4px;
                              padding-top: 8px;
                              }
                              .input-item{
                              background-color: transparent;
                              color: #fff;
                              border-bottom: solid 1px #fff;
                              }
                              .input-item::placeholder{
                              color: #eee;
                              }
                           </style>
                           <div class="form-group">
                              <div class="div_work">
                                 <div class="row form-group acao_workflow bg-secondary">
                                    <center>
                                       <h5 style="color:#fff">Selecione o item para iniciar workflow</h5>
                                    </center>
                                 </div>
                              </div>
                           </div>
                        </center>
                     </form>
                  </div>
                  <div class="card-footer" >
                     <button type="button" class="btn btn-primary" id="btnSalvar" style="float:right" onclick="salvarRPA()">
                     <i class="fa fa-dot-circle-o"></i> Criar RPA2Dev
                     </button>
                     <button type="reset" class="btn btn-danger ">
                     <i class="fa fa-ban"></i> Cancelar
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>