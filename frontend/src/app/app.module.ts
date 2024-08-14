import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Certifique-se de que isso está importado
import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  imports: [
    AppComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    BrowserModule,
    AppRoutingModule // Adicione o AppRoutingModule aqui
  ],
  providers: []
})
export class AppModule { }
