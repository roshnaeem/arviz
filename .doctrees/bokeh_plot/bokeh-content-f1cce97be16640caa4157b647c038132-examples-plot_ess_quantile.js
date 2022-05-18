(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("6f5d8027-58c9-4578-b76c-7d5438976cde");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6f5d8027-58c9-4578-b76c-7d5438976cde' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"82d0562a-f505-4e11-a0b2-5705edaf198c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21250","type":"SaveTool"},{"attributes":{"overlay":{"id":"21252"}},"id":"21246","type":"BoxZoomTool"},{"attributes":{"source":{"id":"21263"}},"id":"21268","type":"CDSView"},{"attributes":{},"id":"21241","type":"BasicTicker"},{"attributes":{},"id":"21280","type":"Selection"},{"attributes":{},"id":"21228","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21274"},"group":null,"major_label_policy":{"id":"21275"},"ticker":{"id":"21241"}},"id":"21240","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"21254"}],"tools":[{"id":"21244"},{"id":"21245"},{"id":"21246"},{"id":"21247"},{"id":"21248"},{"id":"21249"},{"id":"21250"},{"id":"21251"}]},"id":"21285","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21266","type":"Circle"},{"attributes":{"children":[[{"id":"21227"},0,0]]},"id":"21284","type":"GridBox"},{"attributes":{},"id":"21277","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21270","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"21263"},"glyph":{"id":"21264"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21266"},"nonselection_glyph":{"id":"21265"},"view":{"id":"21268"}},"id":"21267","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21269","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21253","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21265","type":"Circle"},{"attributes":{"toolbar":{"id":"21285"},"toolbar_location":"above"},"id":"21286","type":"ToolbarBox"},{"attributes":{},"id":"21278","type":"AllLabels"},{"attributes":{},"id":"21234","type":"LinearScale"},{"attributes":{"tools":[{"id":"21244"},{"id":"21245"},{"id":"21246"},{"id":"21247"},{"id":"21248"},{"id":"21249"},{"id":"21250"},{"id":"21251"}]},"id":"21254","type":"Toolbar"},{"attributes":{},"id":"21247","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"21253"}},"id":"21248","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21280"},"selection_policy":{"id":"21279"}},"id":"21263","type":"ColumnDataSource"},{"attributes":{},"id":"21274","type":"BasicTickFormatter"},{"attributes":{},"id":"21279","type":"UnionRenderers"},{"attributes":{"axis":{"id":"21240"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21243","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21252","type":"BoxAnnotation"},{"attributes":{},"id":"21232","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21277"},"group":null,"major_label_policy":{"id":"21278"},"ticker":{"id":"21237"}},"id":"21236","type":"LinearAxis"},{"attributes":{},"id":"21244","type":"ResetTool"},{"attributes":{"below":[{"id":"21236"}],"center":[{"id":"21239"},{"id":"21243"}],"height":500,"left":[{"id":"21240"}],"output_backend":"webgl","renderers":[{"id":"21267"},{"id":"21269"}],"title":{"id":"21270"},"toolbar":{"id":"21254"},"toolbar_location":null,"width":500,"x_range":{"id":"21228"},"x_scale":{"id":"21232"},"y_range":{"id":"21230"},"y_scale":{"id":"21234"}},"id":"21227","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"21251","type":"HoverTool"},{"attributes":{"axis":{"id":"21236"},"coordinates":null,"group":null,"ticker":null},"id":"21239","type":"Grid"},{"attributes":{},"id":"21245","type":"PanTool"},{"attributes":{},"id":"21230","type":"DataRange1d"},{"attributes":{},"id":"21249","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21264","type":"Circle"},{"attributes":{},"id":"21237","type":"BasicTicker"},{"attributes":{},"id":"21275","type":"AllLabels"},{"attributes":{"children":[{"id":"21286"},{"id":"21284"}]},"id":"21287","type":"Column"}],"root_ids":["21287"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"82d0562a-f505-4e11-a0b2-5705edaf198c","root_ids":["21287"],"roots":{"21287":"6f5d8027-58c9-4578-b76c-7d5438976cde"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();