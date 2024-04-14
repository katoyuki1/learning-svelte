import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	//ポート番号を変えて起動したい場合、以下server:をコメントアウト
  server: {
    port: 3000,  // 追加するポート番号
    open: true   // 自動でブラウザを開く場合は true を指定
  }
});
