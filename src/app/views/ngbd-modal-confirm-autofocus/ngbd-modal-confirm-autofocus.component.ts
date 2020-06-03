import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">{{header}}</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>{{mes1}} <span class="text-primary">"{{mes2}}"</span>{{header}}؟</strong></p>
    <p>{{mes3}}
    <span class="text-danger">{{mes4}}</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="ok()">Ok</button>
  </div>
  `,
  styleUrls: ['./ngbd-modal-confirm-autofocus.component.css']
})
export class NgbdModalConfirmAutofocusComponent implements OnInit {
  static header:string
  static mes1:String
  static mes2:string
  static mes3:string
  static mes4:string
  static callback
  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
  }

  public static setupCategorysComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Categories";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Ce processus est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }

  public static setupRemoveCategorysComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Categories";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer l'élément" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }



  public static setupClientsComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Les données Clients";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }
  public static setupRemoveClientsComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Clients";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer un client" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }


  public static setupSuppliersComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Les données Fournisseur";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }
  public static setupRemoveSuppliersComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Fournisseur";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer un client" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }



  public static setupStoresComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Les données Magasin";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }
  public static setupRemoveStoresComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Magasin";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer le magasin" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }


  public static setupInputComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Les données Achats";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }
  public static setupRemoveInputComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Achats";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer  l'achat" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }



  public static setupOutComponent(callback){
    NgbdModalConfirmAutofocusComponent.header="Les données Ventes";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Effacer l'écran";
    NgbdModalConfirmAutofocusComponent.mes3="L'écran sera complètement nettoyé.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }
  public static setupRemoveOutComponent(callback,name){
    NgbdModalConfirmAutofocusComponent.header="Les données Ventes";
    NgbdModalConfirmAutofocusComponent.mes1="Êtes-vous sûr ?";
    NgbdModalConfirmAutofocusComponent.mes2="Supprimer une vente" + name;
    NgbdModalConfirmAutofocusComponent.mes3="L'opération sera effectuée.";
    NgbdModalConfirmAutofocusComponent.mes4="Cette operation est irréversible.";
    NgbdModalConfirmAutofocusComponent.callback=callback;
  }






  ok(){
    NgbdModalConfirmAutofocusComponent.callback();
    this.modal.close('Ok click');
  }
  get header() {
    return  NgbdModalConfirmAutofocusComponent.header
  }
  get mes1() {
    return   NgbdModalConfirmAutofocusComponent.mes1
  }
  get mes2() {
    return  NgbdModalConfirmAutofocusComponent.mes2
  }
  get mes3() {
    return  NgbdModalConfirmAutofocusComponent.mes3
  }
  get mes4() {
    return  NgbdModalConfirmAutofocusComponent.mes4
  }
}
