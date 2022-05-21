import * as firebaseApp from 'firebase-admin/app'
import firebase from 'firebase-admin'
import { config } from 'firebase-functions/v1'

firebaseApp.initializeApp(config().firebase)

export const db = firebase.firestore()
