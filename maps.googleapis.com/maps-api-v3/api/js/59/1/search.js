google.maps.__gjsload__('search', function(_) {
    var tta = function() {},
        VA = function(a) {
            this.setValues(a);
            _.jj("search_impl")
        },
        vta = function(a) {
            let b = _.Jl,
                c = -1;
            a.tiles.forEach(e => {
                e.zoom > c && (b = e.ki, c = e.zoom)
            });
            if (c === -1) return [];
            const d = [];
            a.Gu().forEach(e => {
                e.a && e.a.length >= 2 && d.push(new uta(e, b, c))
            });
            return d
        },
        wta = function(a) {
            const b = [];
            a.data.forEach(c => {
                b.push(...vta(c))
            });
            return b
        };
    _.Ia(tta, _.Hk);
    var xta = {
            ["1"]: {}
        },
        uta = class {
            constructor(a, b, c) {
                this.rn = b;
                this.zoom = c;
                this.bounds = this.anchor = null;
                this.Eg = xta;
                this.source = a;
                this.featureId = this.source.id || "0";
                this.infoWindowOffset = (this.source.io || []).length === 2 ? new google.maps.Point(this.source.io[0], this.source.io[1]) : null
            }
            getAnchor() {
                if (!this.anchor) {
                    const a = 1 << this.zoom;
                    this.anchor = _.hm(new _.wm((this.rn.x * 256 + this.source.a[0]) / a, (this.rn.y * 256 + this.source.a[1]) / a)).toJSON()
                }
                return this.anchor
            }
            getCompleteBounds() {
                return this.getBounds().reduce((a,
                    b) => {
                    a.extendByBounds(b);
                    return a
                }, _.lm(0, 0, 0, 0))
            }
            getBounds() {
                if (this.bounds === null) {
                    this.bounds = [];
                    const a = this.source.bb || [];
                    if (a.length % 4 === 0)
                        for (let b = 0; b < a.length; b += 4) {
                            const c = this.bounds[this.bounds.length - 1],
                                d = _.lm(a[b], a[b + 1], a[b + 2], a[b + 3]);
                            c && c.equals(d) || this.bounds.push(d)
                        }
                }
                return [...this.bounds]
            }
            getExtendedContent(a) {
                if (this.Eg === xta) try {
                    this.Eg = this.source.c ? JSON.parse(this.source.c) : {}
                } catch (b) {
                    this.Eg = {}
                }
                return this.Eg[a] ? ? {}
            }
            getFeatureName() {
                return this.getExtendedContent("1") ? .title ? ?
                    null
            }
            isTransitStation() {
                return this.getExtendedContent("1") ? .is_transit_station ? ? !1
            }
        };
    var yta = new WeakSet;
    _.Ia(VA, tta);
    VA.prototype.changed = function() {
        const a = this;
        var b = this.get("map");
        let c = null;
        b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1), c.set("disableLabelingHysteresis", this.get("disableLabelingHysteresis")), c.set("tilePrefetchEnabled", this.get("tilePrefetchEnabled")));
        _.jj("search_impl").then(d => {
            d.yG(a);
            c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1))
        })
    };
    VA.enableFeatureMapEventsRasterOnly = function(a) {
        if (_.an[15]) {
            var b = a.__gm.Wg;
            if (!yta.has(a)) {
                yta.add(a);
                var c = [],
                    d = (f, g) => {
                        f = vta(f);
                        f.length && _.Ek(a, g, f)
                    },
                    e = () => {
                        for (; c.length > 0;) c.pop().remove();
                        b.forEach(f => {
                            if (f = f.data) c.push(_.sk(f, "insert", g => d(g, "addfeatures"))), c.push(_.sk(f, "remove", g => d(g, "removefeatures")))
                        })
                    };
                b.addListener("insert_at", e);
                b.addListener("remove_at", e);
                b.addListener("set_at", e);
                e()
            }(() => {
                const f = [];
                b.forEach(g => {
                    f.push(...wta(g))
                });
                f.length && _.Ek(a, "addfeatures", f)
            })()
        }
    };
    _.Fa("module$contents$mapsapi$onionLayers$search$googleLayer_GoogleLayer.enableFeatureMapEventsRasterOnly", VA.enableFeatureMapEventsRasterOnly);
    _.ll(VA.prototype, {
        map: _.ep
    });
    _.ra.google.maps.search = {
        GoogleLayer: VA
    };
    _.kj("search", {});
});