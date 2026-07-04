// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Consumer job untuk memproses tugas antrean audio.
export class AudioConsumer {
  async processJob(job: { id: string; data: any }): Promise<void> {
    console.log(`Memproses pekerjaan audio #${job.id}:`, job.data);
  }
}
