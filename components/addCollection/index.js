var addCollection = (function(){
  
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
      index: function (_el, report) {
        /*File uploader*/
        _el.find('.file').each(function () {
          let file = $(this),
            img = file.prev().find('img');
    
          $(':file', file).change(function () {
            if (this.files && this.files[0]) {
              let reader = new FileReader();
        
              reader.onload = function (e) {
                img.attr('src', e.target.result);
                file.addClass('selected');
              }
              reader.readAsDataURL(this.files[0]);
            }
          });
    
          $('.remove', file).on('click', function (e) {
            e.stopPropagation();
            img.removeAttr('src');
            file.removeClass('selected').find(':file').val('');
          });
        });
  
        /*Navigation*/
        _el.find('.navigation').each(function () {
          let step = 1;
    
          $('.button', this).on('click', function () {
            if ($(this).hasClass('back')) {
              if (step > 1) step--;
            } else {
              if (step < 2) step++;
            }
      
            if (step === 2) {
              console.log(author, _el)
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
            }
  
            _el[0].style.setProperty('--step', step);
          });
        });
      }
    }
    
    var state = {
      save : function(){
      
      },
      load : function(){
      
      }
    }
    
    var initEvents = function(){
      renders.index(el.c);
      // renders.gallery(el.gallery);
    }
    
    return {
      primary : primary,
      
      getdata : function(clbk, p){
        
        var data = {};
        author = p.settings.essenseData.author;
  
        /*Get templates for aside*/
        /*Promise.all([
          self.loadTemplate({ name: 'gallery' })
        ])*/
        
        clbk(data);
      },
      
      destroy : function(){
        el = {};
      },
      
      wnd: {
      
      },
      
      init : function(p){
        
        state.load();
        
        el = {};
        el.c = p.el.find('#add-collection');
        
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
  module.exports = addCollection;
}
else{
  
  app.modules.addCollection = {};
  app.modules.addCollection.module = addCollection;
  
}
