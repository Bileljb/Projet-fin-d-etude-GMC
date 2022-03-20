const Userschema = require('../model/user')

const GetFreelancers = async (req, res) => {
    try {
        const  Freelancers= await Userschema.find()
        res.status(200).send({ msg: 'Registred Freelancers', Freelancers })
    } catch (error) {

    }
}

const DeleteFreelancers = async(req, res)=>{
    try 
    {
        const del = await Userschema.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"Freelancer deleted", del})
    } catch (error) {
        res.status(200).send({msg:"Cannot Delete Freelancer", error})
    }
}


module.exports=
{
    GetFreelancers,
    DeleteFreelancers
}