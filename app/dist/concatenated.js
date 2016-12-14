//// THIS FILE IS CONCATENATED WITH gulp-obfuscator-js
(function (native_require, this_module) {

    // Blatantly stolen from the fantastic node-obfuscator project by Stephen Mathieson
    //     https://github.com/stephenmathieson/node-obfuscator/blob/master/lib/require.js

    // based on TJ Holowaychuk's commonjs require binding

    function require(p, root) {
        // third-party module?  use native require
        if ('.' != p[0] && '/' != p[0]) {
            return native_require(p);
        }

        root = root || 'root';

        var path = require.resolve(p);

        // if it's a non-registered json file, it
        // must be at the root of the project
        if (!path && /\.json$/i.test(p)) {
            return native_require('./' + require.basename(p));
        }

        var module = require.cache[path];

        if (!module) {
            try {
                return native_require(p);
            } catch (err) {
                throw new Error('failed to require "' + p + '" from ' + root +'\n' +
                                                err.message + '\n' + err.stack);
            }
        }

        if (!module.exports) {
            module.exports = {};
            module.call(module.exports, module, module.exports,
                require.relative(path));
        }

        return module.exports;
    }

    // same as node's `require`
    require.cache = {};

    // node's native `path.basename`
    require.basename = native_require('path').basename;

    require.resolve = function (path) {
        // GH-12
        if ('.' != path[0]) {
            return native_require.resolve(path);
        }

        var pathWithSlash = path.slice(-1) === '/' ? path : path + '/';
        var paths = [
            path,
            path + '.js',
            pathWithSlash + 'index.js',
            path + '.json',
            pathWithSlash + 'index.json'
        ];

        for (var i in paths) {
            var p = paths[i];
            if (require.cache[p]) {
                return p;
            }
        }
    };

    require.register = function (path, fn) {
        require.cache[path] = fn;
    };

    require.relative = function (parent) {
        function relative(p) {
            if ('.' != p[0]) {
                return require(p);
            }

            var path = parent.split('/');
            var segs = p.split('/');
            path.pop();

            for (var i in segs) {
                var seg = segs[i];
                if ('..' == seg) {
                    path.pop();
                } else if ('.' != seg) {
                    path.push(seg);
                }
            }

            return require(path.join('/'), parent);
        }

        relative.resolve = require.resolve;
        relative.cache = require.cache;
        return relative;
    };

    //// BEGIN ORIGINAL SOURCE

    // BEGIN FILE ./concatenated.js
    require.register("./concatenated.js", function (module, exports, require) {

//// THIS FILE IS CONCATENATED WITH gulp-obfuscator-js
(function (native_require, this_module) {

    // Blatantly stolen from the fantastic node-obfuscator project by Stephen Mathieson
    //     https://github.com/stephenmathieson/node-obfuscator/blob/master/lib/require.js

    // based on TJ Holowaychuk's commonjs require binding

    function require(p, root) {
        // third-party module?  use native require
        if ('.' != p[0] && '/' != p[0]) {
            return native_require(p);
        }

        root = root || 'root';

        var path = require.resolve(p);

        // if it's a non-registered json file, it
        // must be at the root of the project
        if (!path && /\.json$/i.test(p)) {
            return native_require('./' + require.basename(p));
        }

        var module = require.cache[path];

        if (!module) {
            try {
                return native_require(p);
            } catch (err) {
                throw new Error('failed to require "' + p + '" from ' + root +'\n' +
                                                err.message + '\n' + err.stack);
            }
        }

        if (!module.exports) {
            module.exports = {};
            module.call(module.exports, module, module.exports,
                require.relative(path));
        }

        return module.exports;
    }

    // same as node's `require`
    require.cache = {};

    // node's native `path.basename`
    require.basename = native_require('path').basename;

    require.resolve = function (path) {
        // GH-12
        if ('.' != path[0]) {
            return native_require.resolve(path);
        }

        var pathWithSlash = path.slice(-1) === '/' ? path : path + '/';
        var paths = [
            path,
            path + '.js',
            pathWithSlash + 'index.js',
            path + '.json',
            pathWithSlash + 'index.json'
        ];

        for (var i in paths) {
            var p = paths[i];
            if (require.cache[p]) {
                return p;
            }
        }
    };

    require.register = function (path, fn) {
        require.cache[path] = fn;
    };

    require.relative = function (parent) {
        function relative(p) {
            if ('.' != p[0]) {
                return require(p);
            }

            var path = parent.split('/');
            var segs = p.split('/');
            path.pop();

            for (var i in segs) {
                var seg = segs[i];
                if ('..' == seg) {
                    path.pop();
                } else if ('.' != seg) {
                    path.push(seg);
                }
            }

            return require(path.join('/'), parent);
        }

        relative.resolve = require.resolve;
        relative.cache = require.cache;
        return relative;
    };

    //// BEGIN ORIGINAL SOURCE

    // BEGIN FILE ./js/main.min.js
    require.register("./js/main.min.js", function (module, exports, require) {


    });
    // END FILE

    // BEGIN FILE ./js/plugins.min.js
    require.register("./js/plugins.min.js", function (module, exports, require) {

!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=o.length,r=window.console=window.console||{};i--;)e=o[i],r[e]||(r[e]=n)}();
    });
    // END FILE

    //// END OF ORIGINAL SOURCE
    this_module.exports = require("./index.js");
} (require, module));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb2JmdXNjYXRvci9iZWdpbm5pbmcuanMiLCJqcy9tYWluLm1pbi5qcyIsImpzL3BsdWdpbnMubWluLmpzIiwiLi9vYmZ1c2NhdG9yL2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pHQTs7Ozs7OztBQ0FBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29uY2F0ZW5hdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIiLCIhZnVuY3Rpb24oKXtmb3IodmFyIGUsbj1mdW5jdGlvbigpe30sbz1bXCJhc3NlcnRcIixcImNsZWFyXCIsXCJjb3VudFwiLFwiZGVidWdcIixcImRpclwiLFwiZGlyeG1sXCIsXCJlcnJvclwiLFwiZXhjZXB0aW9uXCIsXCJncm91cFwiLFwiZ3JvdXBDb2xsYXBzZWRcIixcImdyb3VwRW5kXCIsXCJpbmZvXCIsXCJsb2dcIixcIm1hcmtUaW1lbGluZVwiLFwicHJvZmlsZVwiLFwicHJvZmlsZUVuZFwiLFwidGFibGVcIixcInRpbWVcIixcInRpbWVFbmRcIixcInRpbWVsaW5lXCIsXCJ0aW1lbGluZUVuZFwiLFwidGltZVN0YW1wXCIsXCJ0cmFjZVwiLFwid2FyblwiXSxpPW8ubGVuZ3RoLHI9d2luZG93LmNvbnNvbGU9d2luZG93LmNvbnNvbGV8fHt9O2ktLTspZT1vW2ldLHJbZV18fChyW2VdPW4pfSgpOyIsbnVsbF19

    });
    // END FILE

    // BEGIN FILE ./js/main.min.js
    require.register("./js/main.min.js", function (module, exports, require) {


    });
    // END FILE

    // BEGIN FILE ./js/plugins.min.js
    require.register("./js/plugins.min.js", function (module, exports, require) {

!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=o.length,r=window.console=window.console||{};i--;)e=o[i],r[e]||(r[e]=n)}();
    });
    // END FILE

    //// END OF ORIGINAL SOURCE
    this_module.exports = require("./main.js");
} (require, module));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vb2JmdXNjYXRvci9iZWdpbm5pbmcuanMiLCJjb25jYXRlbmF0ZWQuanMiLCJqcy9tYWluLm1pbi5qcyIsImpzL3BsdWdpbnMubWluLmpzIiwiLi9vYmZ1c2NhdG9yL2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3SEE7Ozs7Ozs7QUNBQTs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbmNhdGVuYXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy8vLyBUSElTIEZJTEUgSVMgQ09OQ0FURU5BVEVEIFdJVEggZ3VscC1vYmZ1c2NhdG9yLWpzXG4oZnVuY3Rpb24gKG5hdGl2ZV9yZXF1aXJlLCB0aGlzX21vZHVsZSkge1xuXG4gICAgLy8gQmxhdGFudGx5IHN0b2xlbiBmcm9tIHRoZSBmYW50YXN0aWMgbm9kZS1vYmZ1c2NhdG9yIHByb2plY3QgYnkgU3RlcGhlbiBNYXRoaWVzb25cbiAgICAvLyAgICAgaHR0cHM6Ly9naXRodWIuY29tL3N0ZXBoZW5tYXRoaWVzb24vbm9kZS1vYmZ1c2NhdG9yL2Jsb2IvbWFzdGVyL2xpYi9yZXF1aXJlLmpzXG5cbiAgICAvLyBiYXNlZCBvbiBUSiBIb2xvd2F5Y2h1aydzIGNvbW1vbmpzIHJlcXVpcmUgYmluZGluZ1xuXG4gICAgZnVuY3Rpb24gcmVxdWlyZShwLCByb290KSB7XG4gICAgICAgIC8vIHRoaXJkLXBhcnR5IG1vZHVsZT8gIHVzZSBuYXRpdmUgcmVxdWlyZVxuICAgICAgICBpZiAoJy4nICE9IHBbMF0gJiYgJy8nICE9IHBbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVfcmVxdWlyZShwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QgPSByb290IHx8ICdyb290JztcblxuICAgICAgICB2YXIgcGF0aCA9IHJlcXVpcmUucmVzb2x2ZShwKTtcblxuICAgICAgICAvLyBpZiBpdCdzIGEgbm9uLXJlZ2lzdGVyZWQganNvbiBmaWxlLCBpdFxuICAgICAgICAvLyBtdXN0IGJlIGF0IHRoZSByb290IG9mIHRoZSBwcm9qZWN0XG4gICAgICAgIGlmICghcGF0aCAmJiAvXFwuanNvbiQvaS50ZXN0KHApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlX3JlcXVpcmUoJy4vJyArIHJlcXVpcmUuYmFzZW5hbWUocCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vZHVsZSA9IHJlcXVpcmUuY2FjaGVbcGF0aF07XG5cbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZV9yZXF1aXJlKHApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gcmVxdWlyZSBcIicgKyBwICsgJ1wiIGZyb20gJyArIHJvb3QgKydcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlICsgJ1xcbicgKyBlcnIuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB7fTtcbiAgICAgICAgICAgIG1vZHVsZS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAgICAgICAgIHJlcXVpcmUucmVsYXRpdmUocGF0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuICAgIH1cblxuICAgIC8vIHNhbWUgYXMgbm9kZSdzIGByZXF1aXJlYFxuICAgIHJlcXVpcmUuY2FjaGUgPSB7fTtcblxuICAgIC8vIG5vZGUncyBuYXRpdmUgYHBhdGguYmFzZW5hbWVgXG4gICAgcmVxdWlyZS5iYXNlbmFtZSA9IG5hdGl2ZV9yZXF1aXJlKCdwYXRoJykuYmFzZW5hbWU7XG5cbiAgICByZXF1aXJlLnJlc29sdmUgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAvLyBHSC0xMlxuICAgICAgICBpZiAoJy4nICE9IHBhdGhbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVfcmVxdWlyZS5yZXNvbHZlKHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdGhXaXRoU2xhc2ggPSBwYXRoLnNsaWNlKC0xKSA9PT0gJy8nID8gcGF0aCA6IHBhdGggKyAnLyc7XG4gICAgICAgIHZhciBwYXRocyA9IFtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBwYXRoICsgJy5qcycsXG4gICAgICAgICAgICBwYXRoV2l0aFNsYXNoICsgJ2luZGV4LmpzJyxcbiAgICAgICAgICAgIHBhdGggKyAnLmpzb24nLFxuICAgICAgICAgICAgcGF0aFdpdGhTbGFzaCArICdpbmRleC5qc29uJ1xuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGF0aHMpIHtcbiAgICAgICAgICAgIHZhciBwID0gcGF0aHNbaV07XG4gICAgICAgICAgICBpZiAocmVxdWlyZS5jYWNoZVtwXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlcXVpcmUucmVnaXN0ZXIgPSBmdW5jdGlvbiAocGF0aCwgZm4pIHtcbiAgICAgICAgcmVxdWlyZS5jYWNoZVtwYXRoXSA9IGZuO1xuICAgIH07XG5cbiAgICByZXF1aXJlLnJlbGF0aXZlID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICBmdW5jdGlvbiByZWxhdGl2ZShwKSB7XG4gICAgICAgICAgICBpZiAoJy4nICE9IHBbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZShwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhdGggPSBwYXJlbnQuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHZhciBzZWdzID0gcC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgcGF0aC5wb3AoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzZWdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKCcuLicgPT0gc2VnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgucG9wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgnLicgIT0gc2VnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChzZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUocGF0aC5qb2luKCcvJyksIHBhcmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWxhdGl2ZS5yZXNvbHZlID0gcmVxdWlyZS5yZXNvbHZlO1xuICAgICAgICByZWxhdGl2ZS5jYWNoZSA9IHJlcXVpcmUuY2FjaGU7XG4gICAgICAgIHJldHVybiByZWxhdGl2ZTtcbiAgICB9O1xuXG4gICAgLy8vLyBCRUdJTiBPUklHSU5BTCBTT1VSQ0VcblxuICAgIC8vIEJFR0lOIEZJTEUgLi9qcy9tYWluLm1pbi5qc1xuICAgIHJlcXVpcmUucmVnaXN0ZXIoXCIuL2pzL21haW4ubWluLmpzXCIsIGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUpIHtcblxuXG4gICAgfSk7XG4gICAgLy8gRU5EIEZJTEVcblxuICAgIC8vIEJFR0lOIEZJTEUgLi9qcy9wbHVnaW5zLm1pbi5qc1xuICAgIHJlcXVpcmUucmVnaXN0ZXIoXCIuL2pzL3BsdWdpbnMubWluLmpzXCIsIGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUpIHtcblxuIWZ1bmN0aW9uKCl7Zm9yKHZhciBlLG49ZnVuY3Rpb24oKXt9LG89W1wiYXNzZXJ0XCIsXCJjbGVhclwiLFwiY291bnRcIixcImRlYnVnXCIsXCJkaXJcIixcImRpcnhtbFwiLFwiZXJyb3JcIixcImV4Y2VwdGlvblwiLFwiZ3JvdXBcIixcImdyb3VwQ29sbGFwc2VkXCIsXCJncm91cEVuZFwiLFwiaW5mb1wiLFwibG9nXCIsXCJtYXJrVGltZWxpbmVcIixcInByb2ZpbGVcIixcInByb2ZpbGVFbmRcIixcInRhYmxlXCIsXCJ0aW1lXCIsXCJ0aW1lRW5kXCIsXCJ0aW1lbGluZVwiLFwidGltZWxpbmVFbmRcIixcInRpbWVTdGFtcFwiLFwidHJhY2VcIixcIndhcm5cIl0saT1vLmxlbmd0aCxyPXdpbmRvdy5jb25zb2xlPXdpbmRvdy5jb25zb2xlfHx7fTtpLS07KWU9b1tpXSxyW2VdfHwocltlXT1uKX0oKTtcbiAgICB9KTtcbiAgICAvLyBFTkQgRklMRVxuXG4gICAgLy8vLyBFTkQgT0YgT1JJR0lOQUwgU09VUkNFXG4gICAgdGhpc19tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2luZGV4LmpzXCIpO1xufSAocmVxdWlyZSwgbW9kdWxlKSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dmIySm1kWE5qWVhSdmNpOWlaV2RwYm01cGJtY3Vhbk1pTENKcWN5OXRZV2x1TG0xcGJpNXFjeUlzSW1wekwzQnNkV2RwYm5NdWJXbHVMbXB6SWl3aUxpOXZZbVoxYzJOaGRHOXlMMlZ1WkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096dEJRM3BIUVRzN096czdPenRCUTBGQk96czdPMEZEUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWTI5dVkyRjBaVzVoZEdWa0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHR1ZFd4c0xDSWlMQ0loWm5WdVkzUnBiMjRvS1h0bWIzSW9kbUZ5SUdVc2JqMW1kVzVqZEdsdmJpZ3BlMzBzYnoxYlhDSmhjM05sY25SY0lpeGNJbU5zWldGeVhDSXNYQ0pqYjNWdWRGd2lMRndpWkdWaWRXZGNJaXhjSW1ScGNsd2lMRndpWkdseWVHMXNYQ0lzWENKbGNuSnZjbHdpTEZ3aVpYaGpaWEIwYVc5dVhDSXNYQ0puY205MWNGd2lMRndpWjNKdmRYQkRiMnhzWVhCelpXUmNJaXhjSW1keWIzVndSVzVrWENJc1hDSnBibVp2WENJc1hDSnNiMmRjSWl4Y0ltMWhjbXRVYVcxbGJHbHVaVndpTEZ3aWNISnZabWxzWlZ3aUxGd2ljSEp2Wm1sc1pVVnVaRndpTEZ3aWRHRmliR1ZjSWl4Y0luUnBiV1ZjSWl4Y0luUnBiV1ZGYm1SY0lpeGNJblJwYldWc2FXNWxYQ0lzWENKMGFXMWxiR2x1WlVWdVpGd2lMRndpZEdsdFpWTjBZVzF3WENJc1hDSjBjbUZqWlZ3aUxGd2lkMkZ5Ymx3aVhTeHBQVzh1YkdWdVozUm9MSEk5ZDJsdVpHOTNMbU52Ym5OdmJHVTlkMmx1Wkc5M0xtTnZibk52YkdWOGZIdDlPMmt0TFRzcFpUMXZXMmxkTEhKYlpWMThmQ2h5VzJWZFBXNHBmU2dwT3lJc2JuVnNiRjE5XG4iLCIiLCIhZnVuY3Rpb24oKXtmb3IodmFyIGUsbj1mdW5jdGlvbigpe30sbz1bXCJhc3NlcnRcIixcImNsZWFyXCIsXCJjb3VudFwiLFwiZGVidWdcIixcImRpclwiLFwiZGlyeG1sXCIsXCJlcnJvclwiLFwiZXhjZXB0aW9uXCIsXCJncm91cFwiLFwiZ3JvdXBDb2xsYXBzZWRcIixcImdyb3VwRW5kXCIsXCJpbmZvXCIsXCJsb2dcIixcIm1hcmtUaW1lbGluZVwiLFwicHJvZmlsZVwiLFwicHJvZmlsZUVuZFwiLFwidGFibGVcIixcInRpbWVcIixcInRpbWVFbmRcIixcInRpbWVsaW5lXCIsXCJ0aW1lbGluZUVuZFwiLFwidGltZVN0YW1wXCIsXCJ0cmFjZVwiLFwid2FyblwiXSxpPW8ubGVuZ3RoLHI9d2luZG93LmNvbnNvbGU9d2luZG93LmNvbnNvbGV8fHt9O2ktLTspZT1vW2ldLHJbZV18fChyW2VdPW4pfSgpOyIsbnVsbF19
