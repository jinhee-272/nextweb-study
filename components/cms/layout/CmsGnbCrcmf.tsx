
export default function CmsGnbCrcmf() {
    return (
        <header className="d-flex align-items-center justify-content-between border-bottom bg-white px-4" style={{ height: "60px" }} >
            <div className="d-flex align-items-center justify-content-center border text-secondary fw-medium" style={{ width: "180px", height: "40px" }} >
                Logo
            </div>

            <div className="d-flex align-items-center gap-3 small">
                <span> admin01 계정으로 접속하셨습니다. </span>
                <a href="/logout" className="text-danger fw-bold text-decoration-none" >
                    로그아웃
                </a>
            </div>
        </header>
    );
}