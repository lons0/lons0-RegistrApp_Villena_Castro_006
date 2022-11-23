import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-lista-prof',
  templateUrl: './lista-prof.page.html',
  styleUrls: ['./lista-prof.page.scss'],
})
export class ListaProfPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
