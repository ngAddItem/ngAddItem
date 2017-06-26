export class GLAccount {
    glAccountId: string;
    glAccountDescription: string;
    glAccountType: string;
    companyId: number;
    active: boolean;
    segments: [number, string]; // [segmentNumber, segmentName]

    getGLAccounts(): Array<GLAccount> {
        const results = new Array<GLAccount>();

        const gl = new GLAccount();
        gl.glAccountId = '1030';
        gl.glAccountDescription = 'test gl account';
        gl.companyId = 1;
        gl.glAccountType = '';
        gl.segments = [1, '1030'];
        results.push();
        return results;
    }
}
