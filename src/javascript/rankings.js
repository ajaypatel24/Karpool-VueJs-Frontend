

import axios from 'axios'
var config = require('../../config')

//var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
//var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var Axios = axios.create({

  baseURL: 'https://karpool-spring-14.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': 'localhost:8087/'}
  
})



export default {
  
  data () {
    return {
      search: '',
      activeTrips: ["Active Trips: "],
      activeTripsPrice: ["Price: "],
      activeDrivers: [],
      tripDestination: [],
      activePassengers: [],
      response: [],
      customers: []
    }
  },



methods: {
  
getTrips: function () {
  // Initializing participants from backend
    var vm = this
    if (vm.activeTrips.length > 0) {
      vm.activeTrips = [];
      vm.activeTripsPrice = [];
    }
    Axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
    .then(response => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].tripComplete == true) {
        vm.activeTrips.push(response.data[i].destination)
        vm.activeTripsPrice.push(response.data[i].price)
        }
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},

getDestination: function () {
  // Initializing participants from backend
    var vm = this
    
    axios.get('https://karpool-spring-14.herokuapp.com/drivers/all')
    .then(response => {
      if (vm.tripDestination.length > 0) {
        vm.tripDestination = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.tripDestination.push(response.data[i].destination)
        
      }

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getTopDrivers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/drivers/top3')
    .then(response => {
      if (vm.activeDrivers.length > 0) {
          vm.activeDrivers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.activeDrivers.push(response.data[i])
        
      }

      

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},
getTopPassengers: function () {
  // Initializing participants from backend
    var vm = this
    
    Axios.get('/passengers/top3')
    .then(response => {
      if (vm.activePassengers.length > 0) {
          vm.activePassengers = []
      }
      for (var i = 0; i < response.data.length; i++) {
        
        vm.activePassengers.push(response.data[i])
        
      }

      

      
    })
    .catch(e => {
      vm.errorParticipant = e;
    });
},

    filteredCustomers: function(customers)
    {
    
    
         
       return customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
       //return this.customers;
    },

    check: function(){
      
    document.getElementById("male").checked = true;
    },
    uncheck: function() {
    document.getElementById("female").checked = false;
    }
       //return this.customers;
    




/*
createParticipant: function (participantName) {
  AXIOS.post(`/participants/`+participantName, {}, {})
  .then(response => {
    // JSON responses are automatically parsed.
    this.participants.push(response.data)
    this.newParticipant = ''
    this.errorParticipant = ''
  })
  .catch(e => {
    var errorMsg = e.message
    console.log(errorMsg)
    this.errorParticipant = errorMsg
  });
  */

},
beforeMount () {
  this.getTopPassengers()
  this.getTopDrivers()
}
    /*
    methods: {

      lookupStartingZip: function() {
        //this.newParticipant = "Found";
        var vm = this
        //axios.get('https://karpool-spring-14.herokuapp.com/passengers/' + vm.newParticipant)
        axios.get('https://karpool-spring-14.herokuapp.com/trips/all')
        .then(function (response) {
          var arr = response[0]
          console.log("wack")
          console.log(response)

          vm.participantExist = response.status

          
        
          //vm.newParticipant = response.data.destination
          
        })
        .catch(function (error) {
          vm.participantExist = "invalid"
        })
      } 



    },
*/

  }
  



/*
methods: {
  createParticipant: function (participantName) {
  AXIOS.post(''+participantName, {}, {})
  .then(response => {
    // JSON responses are automatically parsed.
    this.participants.push(response.data)
    this.newParticipant = ''
    this.errorParticipant = ''
  })
  .catch(e => {
    var errorMsg = e.message
    console.log(errorMsg)
    this.errorParticipant = errorMsg
  });
}




  }
  */
