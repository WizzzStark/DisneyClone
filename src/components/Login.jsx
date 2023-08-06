

const Login = () => {
    return (
        <section className="overflow-hidden flex flex-col text-center h-[100vh]">
            <div className="mb-[10vw] w-full relative min-h-[100vh] box-border flex flex-col justify-center items-center px-40 py-80 h-full">

            { /* Background */ }
            <div className="h-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0 z-[-1]" style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}></div>
            { /* Text */ }
            <h1 className="text-[43px] leading-[54px] font-semibold max-w-[1300px]">
            Contenidos Originales exclusivos, películas de éxito y series para maratonear
            </h1>
            </div>
        </section>
    )
};

export default Login;