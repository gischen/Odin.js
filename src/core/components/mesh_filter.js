if (typeof define !== "function") {
    var define = require("amdefine")(module);
}
define([
        "core/components/component",
        "core/assets/material",
        "core/assets/mesh"
    ],
    function(Component, Material, Mesh) {
        "use strict";


        /**
         * @class MeshFilter
         * @extends Component
         * @brief base class for handling meshes
         * @param Object options
         */
        function MeshFilter(opts) {
            opts || (opts = {});

            Component.call(this, "MeshFilter", !! opts.sync, opts.json);

            /**
             * @property Boolean castShadows
             * @memberof MeshFilter
             */
            this.castShadows = opts.castShadows !== undefined ? !! opts.castShadows : true;

            /**
             * @property Boolean receiveShadows
             * @memberof MeshFilter
             */
            this.receiveShadows = opts.receiveShadows !== undefined ? !! opts.receiveShadows : true;

            /**
             * @property Mesh mesh
             * @memberof MeshFilter
             */
            this.mesh = opts.mesh instanceof Mesh ? opts.mesh : new Mesh(opts.mesh);

            /**
             * @property Material material
             * @memberof MeshFilter
             */
            this.material = opts.material instanceof Material ? opts.material : new Material(opts.material);
        }

        Component.extend(MeshFilter);


        MeshFilter.prototype.copy = function(other) {

            this.castShadows = other.castShadows;
            this.receiveShadows = other.receiveShadows;

            this.mesh = other.mesh;
            this.material.copy(other.material);

            return this;
        };


        MeshFilter.prototype.clear = function() {

            this.mesh = undefined;
            this.material = undefined;

            return this;
        };


        return MeshFilter;
    }
);
