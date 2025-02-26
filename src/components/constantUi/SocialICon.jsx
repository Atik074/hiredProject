const SocialICon = ({icon:Icon}) => {
    return (
        <p className='w-9 h-9  bg-white hover:bg-sky-500 flex justify-center items-center rounded mb-3 transition-all'>
                  <Icon  className='text-2xl hover:text-white' />
                </p> 
    );
};

export default SocialICon;