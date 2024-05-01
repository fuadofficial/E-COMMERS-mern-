var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: 'realmec3',
      catogary: 'mobile',
      description: 'this is best mobile',
      image: 'https://m.media-amazon.com/images/I/519HZxK5XPL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      name: 'samsung',
      catogary: 'mobile',
      description: 'this is best mobile',
      image: 'https://i.gadgets360cdn.com/products/large/in-galaxy-f54-sm-e546bdbhins-536813677-617x800-1686037983.jpg?downsize=*:360'
    },
    {
      name: 'vivo',
      catogary: 'mobile',
      description: 'this is best mobile',
      image: 'https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1640949106580/6d0de6e5868086bb76dcc5a07bbb673c.png'
    },
    {
      name: 'oppo',
      catogary: 'mobile',
      description: 'this is best mobile',
      image: 'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-5g-en/listpage/reno11-427-600-green.png.thumb.webp'
    }
  ]
  res.render('admin/view-products', {products, admin: true });
});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
});

router.post('/add-product',function(req,res){
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
