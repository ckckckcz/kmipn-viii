// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Producer job untuk mengirimkan tugas baru ke antrean audio.
export class AudioProducer {
  async addAudioJob(data: any): Promise<string> {
    const jobId = Math.random().toString(36).substring(2, 11);
    console.log(`Menambahkan pekerjaan audio #${jobId} ke antrean`);
    return jobId;
  }
}
