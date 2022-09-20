
function LinkedList() {
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
} 

LinkedList.prototype.add = function(data) {
    let node = new Node(data);
    let current = this.head; 
  
    if (!current) {
        this.head = node;
        return node;
    }
    
    while(current.next){  
        current = current.next;
    }

    current.next = node;
    return node;
}


//Imprimir los valor de los nodos
//Eje: Arrays, obj etc
LinkedList.prototype.getAll = function() {
    current = this.head; 
  
    if (!current) {
        console.log('La lista esta vacia')
        return
    }
    
    while(current){  
        console.log(current.data);
        current = current.next;
    }
    return
};

LinkedList.prototype.remove = function(index){
  
    if (index < 0 || index > this.size) {
      return null
    }
    let current = this.head;
    let previous = null;
    
    if(index == 0){
       this.head = current.next;
    } else {
      for(let i = 0; i < index; i++){
         previous = current;
         current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

let newNodo = new LinkedList()
newNodo.add(5)
newNodo.add(9)
newNodo.add(2)
newNodo.add('Hola soy un salame')


newNodo.getAll()
newNodo.remove(3)
console.log(newNodo)

function HashTable() {
    constructor() {
      this.size = 1000;
      this.table = Array(size);
    }
  
    function put(key, value) {
       this.table[key] = value;
    }
  
    function get(key) {
      return this.table[key];
    }
  }

/* 

PRIMER EJEMPLO DE USO DE LINKEDLIST CON APUNTE DE CLASE EN VIVO

function Node(data) {
    //Es el valor que le damos al nodo
    this.data = data;
    this.next = null;
    //el next nos va a deci a donde mirar y en caso de no tener lugar apunta a null
} 

function LinkedList() {
    //EL valor puede llevar cualquier nombre
    this.head = null;
    //No es necesario poner un next por que es el encabezado y despues vienen los nodos si o si 
}

//Agregar Nodos utilizamos add
LinkedList.prototype.add = function(data) {
    // Instancio el nodo creado por ende tiene data y next
    let node = new Node(data);
    //Guardo la referencia de head en la variable current(Actua como puntero)
    let current = this.head; 
    
    //Pregunto si la condicion es true pero al estar negado seria true y entra 
    //es por eso que niego la condicion para que de true y entre, caso contrario daria current == null
    //Entro solo cuando head sea null (que la lista este vacia)
    //es por eso que solo entra una sola vez
    if (!current) {//Si lo pongo if(current)estaria dciendo que es null y no entraria
        this.head = node;
        return node;
    }
    
    //current.next para entrar al while necesito crear otra lista por que hasta el momento solo tendo un nodo
    //Entro al while cuando tenga mas dfe dos nodos
    while(current.next){ // current.next === null 
        current = current.next;
    }
    //en caso de que el while de null asigno node a current.next 
    current.next = node;// Enlaxamos
    return node;
}

let newNodo = new LinkedList()
newNodo.add(5) 
*/