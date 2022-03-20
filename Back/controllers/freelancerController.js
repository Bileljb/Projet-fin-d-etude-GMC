const Service = require('../model/Service')

const Addgigs = async (req, res) => {

    const { profession, description } = req.body
    
    try {
        const gig = new Service({
        profession, description, userId:req.user._id 
        })
        console.log(gig)
        await gig.save()
        res.status(200).send({ msg: 'new service is added', gig })
    } catch (error) {
        res.status(500).send({ msg: 'could not add service', error })
    }
}
const Getgigs = async (req, res) => {
    try {
        const  Gigs= await Service.find({userId:req.user._id}).populate('userId',['username','email'])
        res.status(200).send({ msg: 'Those are your services', Gigs })
    } catch (error) {
        res.status(500).send({ msg: 'could not find your services', error })
    }
}

const Getallgigs = async (req,res)=>{
    try {
        const  Allgigs= await Service.find().populate('userId')
        res.status(200).send({ msg: 'Those are your services', Allgigs })
    } catch (error) {
        res.status(500).send({ msg: 'Sorry something went wrong', error })
    }
}


const Deletegigs = async(req, res)=>{
    try {
        const del = await Service.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"Service deleted", del})
    } catch (error) {
        res.status(200).send({msg:"Cannot delete the Service", error})
    }
}

const Updategigs = async(req, res)=>{
    // if(!req.file){
    //     return res.status(400).send('Error not a valid extention file')}
    try {
        const upd = await Service.findByIdAndUpdate(req.params.id, {$set: req.body})
        // await Service.findByIdAndUpdate(req.params.id, {$set: {imageUrl:req.file.filename}})
        // res.send('image uploaded')
        res.status(200).send({msg: "service updated", upd})
    } catch (error) {
        res.status(500).send({msg: "could not update service", error})
    }
}

const Getonegig = async (req, res)=>{
    try {
        // const FoundProduct= ProductSchema.findOne({_id}) or :
        const Foundgig= await Service.findById(req.params.id).populate('userId')
        res.status(200).send({msg: "your gig",Foundgig })
    } catch (error) {
        res.status(500).send({msg: "Could not find a gig", error})
    }
}
module.exports =
{
    Addgigs,
    Deletegigs,
    Updategigs,
    Getgigs,
    Getonegig,
    Getallgigs

}