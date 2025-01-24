const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
    name: "support",
    description: "Get support server link",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction, lang) => {
        try {
            const supportServerLink = "https://discord.gg/43VDd3UTrM";
            const githubLink = "https://x.com/InazumaItalia";
            const replitLink = "https://www.tiktok.com/@inazumaitalia?_t=8llL68ttAHY&_r=1";
            const youtubeLink = "https://www.youtube.com/channel/UCUqXWenny0QUFQsyEoZ_xzg";

            const embed = new EmbedBuilder()
                .setColor('#00ccff')
                .setAuthor({
                    name: lang.support.embed.authorName,
                    iconURL: musicIcons.beats2Icon, 
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.description
                    .replace("{supportServerLink}", supportServerLink)
                    .replace("{githubLink}", githubLink)
                    .replace("{replitLink}", replitLink)
                    .replace("{youtubeLink}", youtubeLink)
                )
                .setImage('https://cdn.discordapp.com/attachments/1035479533803020289/1269252459822317589/vr1.png?ex=67937677&is=679224f7&hm=c45c42eeb4c3d2b1adc3cfc9cd552328421ca54105258a78fe9f87fbeb39a7dd&')
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
            const errorEmbed = new EmbedBuilder()
                .setColor('#00ccff')
                .setAuthor({
                    name: lang.support.embed.error,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.errorDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};
