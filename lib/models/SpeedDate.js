const mongoose = require('mongoose');

//iid: String,id: String,gender: String,idg: String,condtn: String,wave: String,round: String,position: String,positin1: String,order: String,partner: String,pid: String,match: String,int_corr: String,samerace: String,age_o: String,race_o: String,pf_o_att: String,pf_o_sin: String,pf_o_int: String,pf_o_fun: String,pf_o_amb: String,pf_o_sha: String,dec_o: String,attr_o: String,sinc_o: String,intel_o: String,fun_o: String,amb_o: String,shar_o: String,like_o: String,prob_o: String,met_o: String,age: String,field: String,field_cd: String,undergra: String,mn_sat: String,tuition: String,race: String,imprace: String,imprelig: String,from: String,zipcode: String,income: String,goal: String,date: String,go_out: String,career: String,career_c: String,sports: String,tvsports: String,exercise: String,dining: String,museums: String,art: String,hiking: String,gaming: String,clubbing: String,reading: String,tv: String,theater: String,movies: String,concerts: String,music: String,shopping: String,yoga: String,exphappy: String,expnum: String,attr1_1: String,sinc1_1: String,intel1_1: String,fun1_1: String,amb1_1: String,shar1_1: String,attr4_1: String,sinc4_1: String,intel4_1: String,fun4_1: String,amb4_1: String,shar4_1: String,attr2_1: String,sinc2_1: String,intel2_1: String,fun2_1: String,amb2_1: String,shar2_1: String,attr3_1: String,sinc3_1: String,fun3_1: String,intel3_1: String,amb3_1: String,attr5_1: String,sinc5_1: String,intel5_1: String,fun5_1: String,amb5_1: String,dec: String,attr: String,sinc: String,intel: String,fun: String,amb: String,shar: String,like: String,prob: String,met: String,match_es: String,attr1_s: String,sinc1_s: String,intel1_s: String,fun1_s: String,amb1_s: String,shar1_s: String,attr3_s: String,sinc3_s: String,intel3_s: String,fun3_s: String,amb3_s: String,satis_2: String,length: String,numdat_2: String,attr7_2: String,sinc7_2: String,intel7_2: String,fun7_2: String,amb7_2: String,shar7_2: String,attr1_2: String,sinc1_2: String,intel1_2: String,fun1_2: String,amb1_2: String,shar1_2: String,attr4_2: String,sinc4_2: String,intel4_2: String,fun4_2: String,amb4_2: String,shar4_2: String,attr2_2: String,sinc2_2: String,intel2_2: String,fun2_2: String,amb2_2: String,shar2_2: String,attr3_2: String,sinc3_2: String,intel3_2: String,fun3_2: String,amb3_2: String,attr5_2: String,sinc5_2: String,intel5_2: String,fun5_2: String,amb5_2: String,you_call: String,them_cal: String,date_3: String,numdat_3: String,num_in_3: String,attr1_3: String,sinc1_3: String,intel1_3: String,fun1_3: String,amb1_3: String,shar1_3: String,attr7_3: String,sinc7_3: String,intel7_3: String,fun7_3: String,amb7_3: String,shar7_3: String,attr4_3: String,sinc4_3: String,intel4_3: String,fun4_3: String,amb4_3: String,shar4_3: String,attr2_3: String,sinc2_3: String,intel2_3: String,fun2_3: String,amb2_3: String,shar2_3: String,attr3_3: String,sinc3_3: String,intel3_3: String,fun3_3: String,amb3_3: String,attr5_3: String,sinc5_3: String,intel5_3: String,fun5_3: String,amb5_3
const schema = new mongoose.Schema({
  exphappy: Number
},
{ strict: false });

schema.statics.getFemales = function() {
  return this.aggregate([
    {
      '$match': {
        'gender': 0
      }
    }]);
};

schema.statics.getMales = function() { 
  return this.aggregate([
    {
      '$match': {
        'gender': 1
      }
    }]);
};

schema.statics.getByMQL = function(MQL) {
  return this.aggregate(MQL);
};

module.exports = mongoose.model('SpeedDate', schema);
