import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MonetizationScript = () => {
  useEffect(() => {
    const linkvertise = function (user_id, options) {
      var elements = document.querySelectorAll("a[href]");
      debug("Scanning " + elements.length + " elements");
      for (var i = 0; i < elements.length; i++) {
        var link = elements[i];
        var base_href = markup(link.href);
        if (base_href.match(new RegExp("^https?://")) == null) continue;
        if (options) {
          if (options.blacklist) {
            var abort = false;
            for (var k = 0; k < options.blacklist.length; k++) {
              if (options.blacklist[k] == "") continue;
              if (str_is(options.blacklist[k], base_href)) abort = true;
            }
            if (abort) continue;
          }
          if (options.whitelist && options.whitelist.length !== 0) {
            var abort = true;
            for (var k = 0; k < options.whitelist.length; k++) {
              if (str_is(options.whitelist[k], base_href)) abort = false;
            }
            if (abort) continue;
          }
        }
        debug("Converting '" + base_href + "'");
        var base_url =
          "https://link-to.net/" + user_id + "/" + Math.random() * 1000 + "/dynamic/";
        var href = base_url + "?r=" + btoa(encodeURI(base_href));
        link.href = href;
        link.setAttribute("_target", "blank");
      }
    };

    const debug = function (message) {
      console.log("[Linkvertise API] " + message);
    };

    const markup = function (href) {
      var link = document.createElement("a");
      link.href = href;
      var c = link.href;
      if (c.substring(c.length - 1) == "/") c = c.substring(0, c.length - 1);
      return c;
    };

    const str_is = function (pattern, value) {
      if (pattern.indexOf("*") == -1) pattern = "*" + pattern + "*";
      if (pattern == value) {
        return true;
      }
      pattern = preg_quote(pattern, "#");
      pattern = pattern.replace(/\\\*/g, function (x) {
        return "\\.*";
      });
      pattern = new RegExp("^" + pattern + "$");
      var res = value.match(pattern);
      return res !== null;
    };

    const preg_quote = function (str, delimiter) {
      return (str + '').replace(
        new RegExp(
          '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]',
          'g'
        ),
        '\\$&'
      );
    };

    linkvertise(386022, { whitelist: [], blacklist: [""] });
  }, []);

  return (
    <div>
      <Helmet>
        <script type="text/javascript">{``}</script>
      </Helmet>
    </div>
  );
};

export default MonetizationScript;
