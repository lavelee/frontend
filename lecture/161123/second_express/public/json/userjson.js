module.exports = function(app){
//http://www.json-generator.com/
// [
//   '{{repeat(11,7)}}',
//   {
//     name: '{{surname()}}',
//     index: '{{index()}}',
//     guid: '{{guid()}}',
//     isActive: '{{bool()}}',
//     email: '{{email([random])}}'
//   }
// ]
  var usersjson = [
  {
    "name": "Castillo",
    "index": 0,
    "guid": "32e1a060-1e60-4784-8a25-89e35c12090c",
    "isActive": true,
    "email": "mcmahonhuber@myopium.com"
  },
  {
    "name": "Rowe",
    "index": 1,
    "guid": "b2e121ca-3f62-41ea-a1c9-d279e36eac67",
    "isActive": false,
    "email": "marawilkinson@niquent.com"
  },
  {
    "name": "Dunn",
    "index": 2,
    "guid": "563cc88e-6ac4-44d1-ba9a-44b2ce981dbc",
    "isActive": false,
    "email": "aileenfinch@lingoage.com"
  },
  {
    "name": "Martin",
    "index": 3,
    "guid": "b9eff652-086b-4d76-87d2-61c3bee05aa7",
    "isActive": false,
    "email": "knoxwiley@photobin.com"
  },
  {
    "name": "York",
    "index": 4,
    "guid": "644d22e2-a609-4494-9fdb-4707a6dfb401",
    "isActive": true,
    "email": "wilkinsonchristensen@zerbina.com"
  },
  {
    "name": "Moran",
    "index": 5,
    "guid": "e3e98ca0-4dd4-4444-9ed4-09222232382e",
    "isActive": false,
    "email": "hatfieldleach@ersum.com"
  },
  {
    "name": "Copeland",
    "index": 6,
    "guid": "f4de561f-770a-4dc8-a6e0-016d2adaabe1",
    "isActive": false,
    "email": "evangelinetownsend@undertap.com"
  },
  {
    "name": "Lindsay",
    "index": 7,
    "guid": "cfc397c4-123a-4b2e-b669-d3c50e44568a",
    "isActive": false,
    "email": "kimhood@zepitope.com"
  },
  {
    "name": "Solis",
    "index": 8,
    "guid": "ccb3ab95-8046-4d9b-9207-b11f0a865798",
    "isActive": true,
    "email": "shawnawong@fuelworks.com"
  }
];

console.log(usersjson.length);
app.get('/usersjson',function(req,res){
  res.json(usersjson);
});

app.get('/usersjson/random',function(req,res){
  var n = Math.floor(Math.random() * usersjson.length);
  res.json(usersjson[n]);
})

}
