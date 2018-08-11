import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 logo d-flex">
              <img src={require('./firebase.png')} alt="" className="img-fluid fire rollIn                     animated"/>
              <h1 className="rollIn animated h1-responsive mytitle ">Firebase</h1>
              <span className="text-center mt-3">
                <i>
                  Firebase est un ensemble de services d'hébergement pour n'importe quel type                    d'application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...).                  Il propose d'héberger en NoSQL et en temps réel des bases de données, du                       contenu, de l'authentification sociale (Google, Facebook, Twitter et Github),                  et des notifications, ou encore des services, tel que par exemple un serveur                   de communication temps réel.
                </i>
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1-responsive">Construire les meilleures app</h1>
              <span className="mt-5 font-weight-bold">
                <i>Firebase vous permet de construire plus de puissance , securise et                          applications scalable tout en utilisant l'infrastructure du monde de classe.                 </i>
              </span>
            </div>
          </div>
        </div>
        {/*-----Nos offres---*/}
        <div className="container myboard mt-5 ">
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="">
                <h3 className="h3-responsive titreoffres">Qu'est ce nous offrons</h3>
              </div>
            </div>
          </div>
          {/*----- debut Firebase relatime---*/}
          <div className="row realtime">
            <div className="col-md-6">
                <h4 className="h4-responsive offres "><i>Firebase realtime</i></h4>
              <p className="description">
                Stockez et synchronisez les données entre les utilisateurs et les périphériques                en temps réel à l'aide d'une base de données NoSQL hébergée dans le cloud. Les                 données mises à jour se synchronisent sur les périphériques connectés en                       millisecondes, et les données restent disponibles si votre application est                     déconnectée, offrant ainsi une expérience utilisateur optimale, quelle que soit                la connectivité réseau.
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <iframe src="https://www.youtube.com/embed/U5aeM5dvUpA?ecver=2" frameBorder="0"
                 allow="autoplay; encrypted-media" allowFullScreen className="video-fluid" />
              </div>
            </div>
          </div>
          {/*----- fin Firebase relatime---*/}
          {/*----- debut Firebase firestore---*/}
          <div className="row realtime">
            <div className="col-md-6">
              <h4 className="h4-responsive offres "><i>Cloud firestore</i></h4>
              <p className="description">
               Stockez et synchronisez les données entre utilisateurs et périphériques - à                    l'échelle mondiale - à l'aide d'une base de données NoSQL hébergée dans le                     cloud. Cloud Firestore vous offre une synchronisation en direct et une assistance              hors ligne avec des requêtes de données efficaces. Son intégration avec d'autres               produits Firebase vous permet de créer des applications véritablement sans                     serveur.
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <iframe src="https://www.youtube.com/embed/QcsAb2RR52c?ecver=2" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen className="video-fluid"/>
              </div>
            </div>
          </div>
          {/*----- fin Firebase firestore---*/}
          {/*----- debut Authentication---*/}
          <div className="row realtime">
            <div className="col-md-6">
              <h4 className="h4-responsive offres "><i>Authentication</i></h4>
              <p className="description">
                Gérez vos utilisateurs de manière simple et sécurisée. Firebase Auth propose                   plusieurs méthodes d'authentification, notamment les e-mails et les mots de                    passe, les fournisseurs tiers tels que Google ou Facebook, et l'utilisation                    directe de votre système de compte existant. Construisez votre propre                          interface ou tirez parti de notre interface utilisateur open source entièrement                personnalisable.
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <iframe src="https://www.youtube.com/embed/8sGY55yxicA?ecver=2" frameBorder="0"
                  allow="autoplay;encrypted-media" allowFullScreen className="video-fluid"/>
              </div>
            </div>
          </div>
          {/*----- fin Firebase Authentication---*/}
          {/*Decouvrez plus */}
          <div className="row mt-3">
            <div className="col-md-12">
              <a href="https://firebase.google.com/products/" target="_blank"                                  rel="noopener noreferrer">
                <h3 className="h3-responsive text-center text-warning">Decouvrez plus...</h3>
              </a>
            </div>
          </div>
          {/* Fin Decouvrez plus */}
        </div>

      </div>
    );
  }
}