var collections = (function(){
  
  var self = new nModule();
  
  var essenses = {};
  
  var Essense = function(p){
    
    var primary = deep(p, 'history');
    var author;
    var el;
    
    var actions = {
    
    }
    
    var events = {
    
    }
    
    var renders = {
      collections: function (_el, report) {
        self.shell({
          name :  'collections',
          el :   _el,
          data : {
            author: author,
            isItMe : self.user.isItMe(author.address)
          },
          animation : false,
        }, function(p){
          _el.find('.list .add').on('click', function(e){
            e.preventDefault();
    
            self.nav.api.go({
              open: true,
              href: 'addCollection',
              inWnd: true,
              wnd: {
                header: 'Add collection',
                footer: {}
              },
              essenseData: {
                author: author
              }
            })
          })
        })
      },
      
      collection: function (_el, report) {
        console.log(_el, author)
        self.shell({
          name :  'collection',
          el :   _el,
          data : {
          
          },
          animation : false,
        }, function(p){
          /*Load posts*/
          self.nav.api.load({
            open : true,
            id : 'lenta',
            el : _el.find('.posts-list'),
            animation : false,
            mid: author.address,
            essenseData : {
      
            }
          });
        })
      }
    }
    
    var state = {
      save : function(){
      
      },
      load : function(){
      
      }
    }
    
    var initEvents = function(p){
      if (author) renders.collections(el.c);
      else renders.collection(el.c);
    }
  
    var preinit = function(address, clbk){
    
      author = {};
    
      if (address) {
        author.address = address
      
        self.sdk.users.get(author.address, function(){
          author.data = self.sdk.users.storage[author.address]
        
          let data = {};
          
          clbk(data);
        })
      }
    }
    
    return {
      primary : primary,
      
      getdata : function(clbk){
        
        let
          data = {},
          p = parameters();
  
        /*Get templates*/
        Promise.all([
          self.loadTemplate({ name: 'collections' }),
          self.loadTemplate({ name: 'collection' })
        ]).then(function () {
          if (p.author) {
            self.sdk.users.addressByName(p.author, function(address){
              preinit(address, clbk);
            });
          } else {
            clbk();
          }
        });
      },
      
      destroy : function(){
        el = {};
      },
      
      wnd: {
      
      },
      
      init : function(p){
        
        state.load();
        
        el = {};
        el.c = p.el.find('#collections-wrapper');
        
        initEvents();
        
        p.clbk(null, p);
      }
    }
  };
  
  
  
  self.run = function(p){
    
    var essense = self.addEssense(essenses, Essense, p);
    
    self.init(essense, p);
    
  };
  
  self.stop = function(){
    
    _.each(essenses, function(essense){
      
      essense.destroy();
      
    })
    
  }
  
  return self;
})();


if(typeof module != "undefined")
{
  module.exports = collections;
}
else{
  
  app.modules.collections = {};
  app.modules.collections.module = collections;
  
}
