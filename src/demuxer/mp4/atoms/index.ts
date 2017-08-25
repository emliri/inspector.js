import {Atom} from './atom';
import {Ftyp} from './ftyp';
import {Stsd} from './stsd';
import {Avc1} from './avc1';
import {AvcC} from './avcC';
import {Mvhd} from './mvhd';
import {Trex} from './trex';
import {Tkhd} from './tkhd';
import {Mdhd} from './mdhd';
import {Hdlr} from './hdlr';
import {Vmhd} from './vmhd';
import {Dref} from './dref';
import {Stts} from './stts';
import {Stsc} from './stsc';
import {Stsz} from './stsz';
import {Stco} from './stco';
import {Smhd} from './smhd';
import {Mp4a} from './mp4a';
import {Esds} from './esds';
import {Sidx} from './sidx';
import {Tfhd} from './tfhd';
import {Tfdt} from './tfdt';
import {Trun} from './trun';
import {Mfhd} from './mfhd';
import {Mdat} from './mdat';
import {Emsg} from './emsg';
import {Styp} from './styp';
import {Pssh} from './pssh';
import {HvcC} from './hvcC';
import {Hvc1} from './hvc1';
import {Hev1} from './hev1';

export const boxesParsers: {[type: string] : (data: Uint8Array) => Atom} = {};

boxesParsers[Atom.ftyp] = Ftyp.parse;
boxesParsers[Atom.stsd] = Stsd.parse;
boxesParsers[Atom.avc1] = Avc1.parse;
boxesParsers[Atom.avcC] = AvcC.parse;
boxesParsers[Atom.mvhd] = Mvhd.parse;
boxesParsers[Atom.trex] = Trex.parse;
boxesParsers[Atom.tkhd] = Tkhd.parse;
boxesParsers[Atom.mdhd] = Mdhd.parse;
boxesParsers[Atom.hdlr] = Hdlr.parse;
boxesParsers[Atom.vmhd] = Vmhd.parse;
boxesParsers[Atom.dref] = Dref.parse;
boxesParsers[Atom.stts] = Stts.parse;
boxesParsers[Atom.stsc] = Stsc.parse;
boxesParsers[Atom.stsz] = Stsz.parse;
boxesParsers[Atom.stco] = Stco.parse;
boxesParsers[Atom.smhd] = Smhd.parse;
boxesParsers[Atom.mp4a] = Mp4a.parse;
boxesParsers[Atom.esds] = Esds.parse;
boxesParsers[Atom.sidx] = Sidx.parse;
boxesParsers[Atom.tfhd] = Tfhd.parse;
boxesParsers[Atom.tfdt] = Tfdt.parse;
boxesParsers[Atom.trun] = Trun.parse;
boxesParsers[Atom.mfhd] = Mfhd.parse;
boxesParsers[Atom.mdat] = Mdat.parse;
boxesParsers[Atom.emsg] = Emsg.parse;
boxesParsers[Atom.styp] = Styp.parse;
boxesParsers[Atom.pssh] = Pssh.parse;
boxesParsers[Atom.hvcC] = HvcC.parse;
boxesParsers[Atom.hvc1] = Hvc1.parse;
boxesParsers[Atom.hev1] = Hev1.parse;
