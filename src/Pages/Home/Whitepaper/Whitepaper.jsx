import whitepaper from '../../../assets/whitepaper/whitepaper.png'

const Whitepaper = () => {
    return (
        <div className="mt-[60px] md:mt-[139px] container mx-auto flex flex-col-reverse md:flex-row gap-[53px] md:gap-[68px] items-center justify-center">
            <img className='bg-[#ffffff0d] rounded-[30px] p-[34px] w-[340px] md:w-[554px]' src={whitepaper} alt="" />
            <div className='w-[350px] md:w-[620px] text-center'>
                 <h1 className='text-[32px] md:text-5xl font-bold mb-4 md:mb-8'>Whitepaper</h1>
                 <p className='text-base md:text-lg mb-6 md:mb-[30px]'>Pellentesque erat tellus, malesuada id felis quis, hendrerit feugiat purus. Nunc elit nisi, consectetur sed quam id, vestibulum rhoncus enim. Aenean vulputate dui dui, in molestie massa scelerisque in. Vivamus tincidunt velit eget ex venenatis pretium in sit amet sapien. Cras ac sollicitudin nisi. Sed laoreet tincidunt feugiat. Phasellus leo odio, dapibus ac pretium</p> 
                 <p className='mb-6 md:mb-[55px]'>Sed ac sapien cursus, suscipit erat nec, iaculis massa. Nunc ultrices enim et nunc dignissim dignissim. </p>  
                 <button className='btn_custom'>Download Whitepaper</button>     
            </div>
        </div>
    );
};

export default Whitepaper;