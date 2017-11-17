export declare class Atom {
    type: string;
    size: number;
    static ftyp: string;
    static styp: string;
    static avc1: string;
    static avc3: string;
    static hvc1: string;
    static hev1: string;
    static s263: string;
    static d263: string;
    static vp08: string;
    static vp09: string;
    static mdat: string;
    static mp4a: string;
    static wave: string;
    static ac_3: string;
    static dac3: string;
    static ec_3: string;
    static dec3: string;
    static dtsc: string;
    static dtsh: string;
    static dtsl: string;
    static dtse: string;
    static ddts: string;
    static tfdt: string;
    static tfhd: string;
    static trex: string;
    static trun: string;
    static sidx: string;
    static moov: string;
    static mvhd: string;
    static trak: string;
    static mdia: string;
    static minf: string;
    static stbl: string;
    static avcC: string;
    static hvcC: string;
    static vpcC: string;
    static esds: string;
    static moof: string;
    static traf: string;
    static mvex: string;
    static tkhd: string;
    static edts: string;
    static elst: string;
    static mdhd: string;
    static hdlr: string;
    static stsd: string;
    static pssh: string;
    static sinf: string;
    static schm: string;
    static schi: string;
    static tenc: string;
    static encv: string;
    static enca: string;
    static frma: string;
    static saiz: string;
    static saio: string;
    static uuid: string;
    static senc: string;
    static pasp: string;
    static TTML: string;
    static vmhd: string;
    static mp4v: string;
    static stts: string;
    static stss: string;
    static ctts: string;
    static stsc: string;
    static stsz: string;
    static stco: string;
    static co64: string;
    static tx3g: string;
    static wvtt: string;
    static stpp: string;
    static samr: string;
    static sawb: string;
    static dinf: string;
    static dref: string;
    static url: string;
    static smhd: string;
    static mfhd: string;
    static emsg: string;
    constructor(type: string, size: number);
    static isContainerBox(type: string): boolean;
}
export declare class ContainerAtom extends Atom {
    containerDataOffset: number;
    atoms: Atom[];
    constructor(type: string, size: number);
}
